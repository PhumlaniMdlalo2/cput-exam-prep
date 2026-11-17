import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Question } from '../types/content';
import { storage } from '../lib/storage';
import { evaluateExam } from '../lib/scoring';
import type { ScoreResult } from '../lib/scoring';
import { useRouter } from '../lib/router';
import { getMock } from '../content/mocks';
import { getChapterTest } from '../content/tests';
import { cn } from '../lib/cn';

const typeLabels: Record<Question['type'], string> = {
  mcq: 'Multiple choice',
  truefalse: 'True or false',
  short: 'Short answer',
  essay: 'Essay',
  calculation: 'Calculation'
};

const isWritten = (question: Question) =>
  question.type === 'short' || question.type === 'essay';

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number) => String(value).padStart(2, '0');
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
};

const isAnswered = (value: any): boolean => {
  if (value === undefined || value === null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
};

const answerText = (question: Question, answer: any): string => {
  if (answer === undefined || answer === null || answer === '') return '—';
  if (question.type === 'mcq') {
    const option = question.options?.find((candidate) => candidate.id === answer);
    return option?.text ?? String(answer);
  }
  if (question.type === 'truefalse') {
    return answer === 'true' ? 'True' : answer === 'false' ? 'False' : String(answer);
  }
  if (question.type === 'calculation' && typeof answer === 'object') {
    return Object.entries(answer)
      .map(([key, value]) => `${key}: ${value}`)
      .join(' · ');
  }
  return String(answer);
};

const correctAnswerText = (question: Question): string => {
  if (question.type === 'mcq') {
    const option = question.options?.find((candidate) => candidate.id === question.correctOptionId);
    return option?.text ?? '—';
  }
  if (question.type === 'truefalse') {
    return question.correctOptionId === 'true' ? 'True' : 'False';
  }
  if (question.type === 'calculation' && question.parts) {
    return question.parts
      .map((part) => `${part.label}: ${part.numericAnswer ?? part.modelAnswer}${part.unit ? ` ${part.unit}` : ''}`)
      .join(' · ');
  }
  return question.modelAnswer ?? '—';
};

const ExamView: React.FC<{ examId: string; type: 'mock' | 'test' }> = ({ examId, type }) => {
  const { navigate } = useRouter();

  const examData = useMemo(() => {
    if (type === 'mock') return getMock(examId);
    return getChapterTest(examId);
  }, [examId, type]);

  const sections = useMemo(() => {
    if (!examData) return [];
    if ('sections' in examData) return examData.sections;
    return [
      {
        id: examData.id,
        title: 'Questions',
        instructions: examData.instructions,
        questions: examData.questions
      }
    ];
  }, [examData]);

  const questions = useMemo(() => sections.flatMap((section) => section.questions), [sections]);
  const totalMarks = useMemo(
    () => questions.reduce((total, question) => total + question.marks, 0),
    [questions]
  );
  const questionNumbers = useMemo(
    () => new Map(questions.map((question, index) => [question.id, index + 1])),
    [questions]
  );

  const [phase, setPhase] = useState<'intro' | 'active'>('intro');
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (examData) {
      setTimeLeft(examData.timeLimitMinutes * 60);
    }
  }, [examData]);

  const handleAnswerChange = useCallback((questionId: string, value: any, partId?: string) => {
    setAnswers((previous) => {
      if (partId) {
        const previousAnswer =
          previous[questionId] && typeof previous[questionId] === 'object'
            ? previous[questionId]
            : {};
        return { ...previous, [questionId]: { ...previousAnswer, [partId]: value } };
      }
      return { ...previous, [questionId]: value };
    });
  }, []);

  const handleSubmitExam = useCallback(() => {
    if (!examData) return;
    const result = evaluateExam(questions, answers);
    const scorePercentage = result.maxScore > 0 ? (result.score / result.maxScore) * 100 : 0;
    const progressData = storage.getProgress();
    const record = {
      score: scorePercentage,
      total: result.maxScore,
      date: new Date().toISOString(),
      answers
    };

    if (type === 'mock') {
      progressData.completedExams[examId] = record;
    } else if ('chapterId' in examData) {
      progressData.completedChapters[examData.chapterId] = record;
    }
    storage.saveProgress(progressData);
    navigate(`results/${examId}/${type}`);
  }, [answers, examData, examId, navigate, questions, type]);

  useEffect(() => {
    if (phase !== 'active') return;
    const timer = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === 'active' && timeLeft === 0) {
      handleSubmitExam();
    }
  }, [phase, timeLeft, handleSubmitExam]);

  const answeredCount = questions.filter((question) => isAnswered(answers[question.id])).length;

  if (!examData) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Exam not found</h1>
        <p className="mt-2 text-sm text-muted">This paper does not exist.</p>
        <button
          type="button"
          onClick={() => navigate('exams')}
          className="mt-4 text-sm font-medium text-accent-strong"
        >
          ← Back to exams
        </button>
      </div>
    );
  }

  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate('exams')}
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          ← Back to exams
        </button>
        <div className="mt-6 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {type === 'mock' ? 'Mock examination' : 'Chapter test'}
          </p>
          <h1 className="mt-2">{examData.title}</h1>
          <p className="mt-4 text-[0.95rem] leading-7 text-ink/85">{examData.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Marks</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">{totalMarks}</dd>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Questions</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">{questions.length}</dd>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Time</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">{examData.timeLimitMinutes} min</dd>
            </div>
          </dl>

          {sections.length > 0 ? (
            <div className="mt-6 space-y-2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="rounded-md border border-line bg-canvas/70 px-4 py-2"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                    {section.title}
                  </p>
                  <p className="text-xs leading-5 text-ink/80">{section.instructions.join(' ')}</p>
                </div>
              ))}
            </div>
          ) : null}

          <ul className="mt-6 space-y-2 text-sm text-ink/85">
            <li>• Your answers are marked against the model answer’s key points.</li>
            <li>• The timer submits the paper automatically when it reaches zero.</li>
            <li>• Your result is saved in this browser only.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setPhase('active')}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
            >
              Begin attempt
            </button>
            <button
              type="button"
              onClick={() => navigate('exams')}
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => navigate('exams')}
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          ← Back to exams
        </button>
        <span className="text-sm text-faint">|</span>
        <h1 className="font-serif text-xl sm:text-2xl">{examData.title}</h1>
        <div className="ml-auto flex items-center gap-3">
          <span
            className={cn(
              'rounded-md border px-3 py-1.5 font-mono text-sm',
              timeLeft <= 300
                ? 'border-danger/50 bg-danger-soft text-danger'
                : 'border-line bg-surface text-ink'
            )}
          >
            {formatTime(timeLeft)}
          </span>
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-spring"
          style={{ width: `${questions.length > 0 ? (answeredCount / questions.length) * 100 : 0}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-muted">
        {answeredCount} of {questions.length} answered
      </p>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            className="overflow-hidden rounded-xl border border-line bg-surface shadow-card"
          >
            <header className="border-b border-line bg-canvas/60 px-5 py-4 sm:px-6">
              <h2 className="font-serif text-xl">{section.title}</h2>
              <p className="mt-1 text-xs leading-5 text-muted">{section.instructions.join(' ')}</p>
            </header>
            <div className="space-y-4 p-5 sm:p-6">
              {section.questions.map((question) => (
                <QuestionRenderer
                  key={question.id}
                  question={question}
                  number={questionNumbers.get(question.id) ?? 1}
                  currentAnswer={answers[question.id]}
                  selfScore={answers[`${question.id}_selfScore`]}
                  onAnswerChange={handleAnswerChange}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setShowConfirm(true)}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          Review and submit
        </button>
        <span className="text-xs text-faint">
          {questions.length} questions · {totalMarks} marks
        </span>
      </div>

      {showConfirm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-line bg-surface p-6 shadow-float">
            <h2 className="font-serif text-xl">Submit this attempt?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              You have answered {answeredCount} of {questions.length} questions. You cannot change your
              answers after submitting.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                Keep working
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
              >
                Submit attempt
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const QuestionRenderer: React.FC<{
  question: Question;
  number: number;
  currentAnswer: any;
  selfScore: any;
  onAnswerChange: (questionId: string, value: any, partId?: string) => void;
}> = ({ question, number, currentAnswer, selfScore, onAnswerChange }) => {
  return (
    <div className="rounded-lg border border-line bg-canvas/40 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-8 min-w-8 items-center justify-center rounded-md bg-accent px-2 font-mono text-xs font-semibold text-canvas">
          {number}
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
          {typeLabels[question.type]}
        </span>
        <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-medium text-gold">
          {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
        </span>
      </div>

      <p className="mt-3 whitespace-pre-wrap font-serif text-lg leading-snug text-ink">
        {question.prompt}
      </p>
      {question.caseText ? (
        <p className="mt-2 whitespace-pre-wrap rounded-md border border-line bg-surface px-3 py-2 text-sm leading-6 text-muted">
          {question.caseText}
        </p>
      ) : null}

      {question.type === 'mcq' ? (
        <fieldset className="mt-4 space-y-2">
          <legend className="sr-only">Choose one answer</legend>
          {question.options?.map((option, index) => {
            const selected = currentAnswer === option.id;
            return (
              <label
                key={option.id}
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-lg border px-3.5 py-2.5 transition-colors duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30',
                  selected
                    ? 'border-accent bg-accent-soft/70'
                    : 'border-line bg-surface hover:border-accent/40'
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={selected}
                  onChange={() => onAnswerChange(question.id, option.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-semibold uppercase',
                    selected ? 'border-accent bg-accent text-canvas' : 'border-line text-muted'
                  )}
                >
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm leading-6 text-ink/90">{option.text}</span>
              </label>
            );
          })}
        </fieldset>
      ) : null}

      {question.type === 'truefalse' ? (
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {['true', 'false'].map((value) => {
            const selected = currentAnswer === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => onAnswerChange(question.id, value)}
                className={cn(
                  'rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors duration-200',
                  selected
                    ? 'border-accent bg-accent-soft text-accent-strong'
                    : 'border-line bg-surface text-ink hover:border-accent/40'
                )}
              >
                {value === 'true' ? 'True' : 'False'}
              </button>
            );
          })}
        </div>
      ) : null}

      {question.type === 'calculation' ? (
        <div className="mt-4 space-y-3">
          {question.parts?.map((part) => (
            <div key={part.id} className="rounded-md border border-line bg-surface px-3.5 py-3">
              <label className="block text-sm font-medium text-ink" htmlFor={`${question.id}-${part.id}`}>
                {part.label}. {part.prompt} ({part.marks} marks)
              </label>
              {part.formula ? (
                <p className="mt-0.5 font-mono text-[0.7rem] text-faint">{part.formula}</p>
              ) : null}
              <div className="mt-2 flex items-center gap-2">
                <input
                  id={`${question.id}-${part.id}`}
                  type="number"
                  value={currentAnswer?.[part.id] ?? ''}
                  onChange={(event) => onAnswerChange(question.id, event.target.value, part.id)}
                  className="w-full max-w-48 rounded-md border border-line bg-canvas px-3 py-2 text-sm text-ink focus:border-accent"
                  placeholder="Enter answer"
                />
                {part.unit ? <span className="text-sm text-muted">{part.unit}</span> : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {isWritten(question) ? (
        <div className="mt-4">
          <label className="block text-sm font-medium text-ink" htmlFor={`${question.id}-answer`}>
            Your answer
          </label>
          <textarea
            id={`${question.id}-answer`}
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onChange={(event) => onAnswerChange(question.id, event.target.value)}
            rows={6}
            placeholder="Write your answer in full sentences…"
            className="mt-2 w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-sm leading-6 text-ink focus:border-accent"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <label className="text-xs font-medium text-muted" htmlFor={`${question.id}-self`}>
              Self-score out of {question.marks}
            </label>
            <input
              id={`${question.id}-self`}
              type="number"
              min={0}
              max={question.marks}
              value={selfScore ?? ''}
              onChange={(event) => onAnswerChange(`${question.id}_selfScore`, event.target.value)}
              className="w-24 rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink focus:border-accent"
              placeholder="Score"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const ResultsView: React.FC<{ examId: string; type: 'mock' | 'test' }> = ({
  examId,
  type
}) => {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState<'all' | 'missed' | 'written'>('all');

  const examData = useMemo(() => {
    if (type === 'mock') return getMock(examId);
    return getChapterTest(examId);
  }, [examId, type]);

  const sections = useMemo(() => {
    if (!examData) return [];
    if ('sections' in examData) return examData.sections;
    return [
      {
        id: examData.id,
        title: 'Questions',
        instructions: examData.instructions,
        questions: examData.questions
      }
    ];
  }, [examData]);

  const questions = useMemo(() => sections.flatMap((section) => section.questions), [sections]);
  const questionNumbers = useMemo(
    () => new Map(questions.map((question, index) => [question.id, index + 1])),
    [questions]
  );

  const progress = useMemo(() => storage.getProgress(), []);
  const record =
    type === 'mock'
      ? progress.completedExams[examId]
      : examData && 'chapterId' in examData
        ? progress.completedChapters[examData.chapterId]
        : undefined;

  const result: ScoreResult | null = useMemo(() => {
    if (!examData) return null;
    return evaluateExam(questions, record?.answers ?? {});
  }, [examData, questions, record]);

  if (!examData || !result || !record) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Result not found</h1>
        <p className="mt-2 text-sm text-muted">
          This attempt is not in this browser’s saved progress.
        </p>
        <button
          type="button"
          onClick={() => navigate('exams')}
          className="mt-4 text-sm font-medium text-accent-strong"
        >
          ← Back to exams
        </button>
      </div>
    );
  }

  const percentage = result.maxScore > 0 ? Math.round((result.score / result.maxScore) * 100) : 0;
  const missed = questions.filter((question) => {
    const detail = result.details[question.id];
    return detail && detail.score < detail.maxScore;
  });
  const written = questions.filter(isWritten);
  const visible =
    filter === 'missed' ? missed : filter === 'written' ? written : questions;
  const correctCount = questions.filter((question) => result.details[question.id]?.isCorrect).length;

  const scoreTone =
    percentage >= 75 ? 'text-success' : percentage >= 50 ? 'text-gold' : 'text-danger';

  return (
    <div>
      <button
        type="button"
          onClick={() => navigate('exams')}
          className="-ml-2 inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-accent-strong"
      >
        ← All exams
      </button>

      <div className="mt-5 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
          {type === 'mock' ? 'Mock exam result' : 'Chapter test result'}
        </p>
        <h1 className="mt-2 text-3xl">{examData.title}</h1>
        <p className="mt-1 text-sm text-muted">
          Completed{' '}
          {new Date(record.date).toLocaleString('en-ZA', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-6">
          <div>
            <p className={cn('font-serif text-5xl leading-none', scoreTone)}>{percentage}%</p>
            <p className="mt-1 text-sm text-muted">
              {Math.round(result.score)} of {result.maxScore} marks
            </p>
          </div>
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold',
              percentage >= 50 ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger'
            )}
          >
            {percentage >= 50 ? 'Pass' : 'Below pass mark'}
          </span>
          <div className="ml-auto grid grid-cols-3 gap-2 text-center">
            <div className="rounded-md bg-canvas px-3 py-2">
              <p className="text-[0.62rem] uppercase tracking-wide text-muted">Correct</p>
              <p className="font-serif text-lg text-ink">{correctCount}</p>
            </div>
            <div className="rounded-md bg-canvas px-3 py-2">
              <p className="text-[0.62rem] uppercase tracking-wide text-muted">Needs review</p>
              <p className="font-serif text-lg text-ink">{missed.length}</p>
            </div>
            <div className="rounded-md bg-canvas px-3 py-2">
              <p className="text-[0.62rem] uppercase tracking-wide text-muted">Written</p>
              <p className="font-serif text-lg text-ink">{written.length}</p>
            </div>
          </div>
        </div>

        {sections.length > 1 ? (
          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            {sections.map((section) => {
              const marksAvailable = section.questions.reduce(
                (total, question) => total + question.marks,
                0
              );
              const marksAwarded = section.questions.reduce(
                (total, question) => total + (result.details[question.id]?.score ?? 0),
                0
              );
              return (
                <div
                  key={section.id}
                  className="rounded-md border border-line bg-canvas px-3 py-2"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                    {section.title}
                  </p>
                  <p className="font-serif text-lg text-ink">
                    {Math.round(marksAwarded)}/{marksAvailable}
                  </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: `All (${questions.length})` },
          { id: 'missed', label: `Needs review (${missed.length})` },
          { id: 'written', label: `Written (${written.length})` }
        ].map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFilter(option.id as typeof filter)}
            className={cn(
              'rounded-md border px-3 py-1.5 text-sm font-medium transition-colors',
              filter === option.id
                ? 'border-accent bg-accent-soft text-accent-strong'
                : 'border-line text-muted hover:border-accent/40 hover:text-ink'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {visible.length > 0 ? (
          visible.map((question) => {
            const detail = result.details[question.id];
            const fullMarks = detail ? detail.score >= detail.maxScore : false;
            const partial = detail ? detail.score > 0 && !fullMarks : false;
            const answer = record.answers?.[question.id];
            return (
              <div
                key={question.id}
                className="rounded-lg border border-line bg-surface p-4 shadow-card sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex h-7 min-w-7 items-center justify-center rounded bg-canvas px-1.5 font-mono text-xs font-semibold text-ink">
                    {questionNumbers.get(question.id)}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
                    {typeLabels[question.type]}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
                      fullMarks
                        ? 'bg-success-soft text-success'
                        : partial
                          ? 'bg-gold-soft text-gold'
                          : 'bg-danger-soft text-danger'
                    )}
                  >
                    {Math.round(detail?.score ?? 0)} / {question.marks}
                  </span>
                  {isWritten(question) ? (
                    <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                      Self-marked
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 whitespace-pre-wrap text-[0.95rem] leading-6 text-ink">
                  {question.prompt}
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-line bg-canvas/70 px-3 py-2">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-muted">
                      Your answer
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-ink/85">
                      {answerText(question, answer)}
                    </p>
                  </div>
                  <div className="rounded-md border border-accent/30 bg-accent-soft/40 px-3 py-2">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-accent-strong">
                      {isWritten(question) ? 'Model answer' : 'Correct answer'}
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-ink/85">
                      {correctAnswerText(question)}
                    </p>
                  </div>
                </div>

                {question.explanation ? (
                  <p className="mt-3 text-sm leading-6 text-muted">{question.explanation}</p>
                ) : null}
              </div>
            );
          })
        ) : (
          <div className="rounded-lg border border-line bg-surface p-6 text-center text-sm text-muted">
            Nothing to show in this filter.
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => navigate(`${type === 'mock' ? 'exam' : 'test'}/${examData.id}`)}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          Try this paper again
        </button>
        <button
          type="button"
          onClick={() => navigate('home')}
          className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          Back to dashboard
        </button>
      </div>
    </div>
  );
};

export { ExamView };
