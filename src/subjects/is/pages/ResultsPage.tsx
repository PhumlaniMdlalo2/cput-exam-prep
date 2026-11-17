import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { QuestionResult } from '../content/types'
import { findAttempt } from '../lib/storage'
import { cn } from '../lib/cn'

const typeLabels: Record<string, string> = {
  mcq: 'Multiple choice',
  truefalse: 'True or false',
  matching: 'Matching',
  short: 'Short answer',
  application: 'Application',
  sql: 'SQL',
  essay: 'Essay',
}

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleString('en-ZA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainder = seconds % 60
  return `${minutes}m ${String(remainder).padStart(2, '0')}s`
}

const scoreTone = (percentage: number): string =>
  percentage >= 75
    ? 'text-success'
    : percentage >= 50
      ? 'text-gold'
      : 'text-danger'

const ResultCard = ({ result }: { result: QuestionResult }) => {
  const fullMarks = result.marksAwarded >= result.marksAvailable
  const partial = !fullMarks && result.marksAwarded > 0
  const written =
    result.type === 'short' ||
    result.type === 'application' ||
    result.type === 'sql' ||
    result.type === 'essay'

  return (
    <div className="rounded-lg border border-line bg-surface p-4 shadow-card sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-7 min-w-7 items-center justify-center rounded bg-canvas px-1.5 font-mono text-xs font-semibold text-ink">
          {result.questionNumber}
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
          {typeLabels[result.type] ?? result.type}
        </span>
        <span
          className={cn(
            'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
            fullMarks
              ? 'bg-success-soft text-success'
              : partial
                ? 'bg-gold-soft text-gold'
                : 'bg-danger-soft text-danger',
          )}
        >
          {result.marksAwarded} / {result.marksAvailable}
        </span>
        {written ? (
          <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
            Auto-marked
          </span>
        ) : null}
      </div>

      <p className="mt-3 whitespace-pre-wrap text-[0.95rem] leading-6 text-ink">{result.prompt}</p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-line bg-canvas/70 px-3 py-2">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-muted">
            Your answer
          </p>
          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-ink/85">
            {result.userAnswer}
          </p>
        </div>
        <div className="rounded-md border border-accent/30 bg-accent-soft/40 px-3 py-2">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-accent-strong">
            {written ? 'Model answer' : 'Correct answer'}
          </p>
          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-ink/85">
            {written ? result.modelAnswer : result.correctAnswer}
          </p>
        </div>
      </div>

      {result.sqlSolution ? (
        <div className="mt-3 overflow-hidden rounded-md border border-line bg-[#15171c]">
          <pre className="scrollbar-thin overflow-x-auto p-3 text-xs text-[#e9e5da]">
            <code>{result.sqlSolution}</code>
          </pre>
        </div>
      ) : null}

      <p className="mt-3 text-sm leading-6 text-muted">{result.explanation}</p>

      {result.markingGuide && result.markingGuide.length > 0 ? (
        <div className="mt-3 rounded-md border border-line bg-canvas/60 p-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-muted">
            Marking points
          </p>
          <ul className="mt-1.5 space-y-1 text-sm">
            {result.markingGuide.map((point, index) => {
              const hit = result.detectedPoints?.includes(point.point)
              return (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className={cn(
                      'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-bold',
                      hit ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger',
                    )}
                  >
                    {hit ? '✓' : '·'}
                  </span>
                  <span className={hit ? 'text-ink/85' : 'text-muted'}>{point.point}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}

      {result.commonMistakes ? (
        <p className="mt-3 rounded-md bg-danger-soft/50 px-3 py-2 text-xs leading-5 text-danger">
          Common mistake: {result.commonMistakes}
        </p>
      ) : null}
    </div>
  )
}

export const ResultsPage = () => {
  const { attemptId } = useParams()
  const attempt = attemptId ? findAttempt(attemptId) : undefined
  const [filter, setFilter] = useState<'all' | 'missed' | 'written'>('all')

  if (!attempt) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Result not found</h1>
        <p className="mt-2 text-sm text-muted">
          This attempt is not in this browser’s saved progress.
        </p>
        <Link to="/is/progress" className="mt-4 inline-block text-sm font-medium text-accent-strong">
          ← Back to progress
        </Link>
      </div>
    )
  }

  const missed = attempt.questionResults.filter(
    (result) =>
      result.isCorrect === false ||
      (result.isCorrect === null && result.marksAwarded < result.marksAvailable),
  )
  const written = attempt.questionResults.filter(
    (result) =>
      result.type === 'short' ||
      result.type === 'application' ||
      result.type === 'sql' ||
      result.type === 'essay',
  )

  const visible =
    filter === 'missed' ? missed : filter === 'written' ? written : attempt.questionResults

  return (
    <div>
      <Link
        to={
          attempt.kind === 'mock-exam'
            ? '/exams'
            : attempt.kind === 'sql-exam'
              ? '/sql'
              : '/chapters'
        }
        className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
      >
        ←{' '}
        {attempt.kind === 'mock-exam'
          ? 'All mock exams'
          : attempt.kind === 'sql-exam'
            ? 'SQL Lab'
            : 'All chapters'}
      </Link>

      <div className="mt-5 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
          {attempt.kind === 'mock-exam'
            ? 'Mock exam result'
            : attempt.kind === 'sql-exam'
              ? 'SQL exam result'
              : 'Chapter test result'}
        </p>
        <h1 className="mt-2 text-3xl">{attempt.title}</h1>
        <p className="mt-1 text-sm text-muted">
          Completed {formatDate(attempt.completedAt)} · {formatDuration(attempt.durationSeconds)}
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-6">
          <div>
            <p className={cn('font-serif text-5xl leading-none', scoreTone(attempt.percentage))}>
              {attempt.percentage}%
            </p>
            <p className="mt-1 text-sm text-muted">
              {attempt.marksAwarded} of {attempt.marksAvailable} marks
            </p>
          </div>
          <span
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold',
              attempt.percentage >= 50
                ? 'bg-success-soft text-success'
                : 'bg-danger-soft text-danger',
            )}
          >
            {attempt.percentage >= 50 ? 'Pass' : 'Below pass mark'}
          </span>
          <div className="ml-auto grid grid-cols-2 gap-2 text-center sm:grid-cols-3">
            <div className="rounded-md bg-canvas px-3 py-2">
              <p className="text-[0.62rem] uppercase tracking-wide text-muted">Correct</p>
              <p className="font-serif text-lg text-ink">
                {attempt.questionResults.filter((result) => result.isCorrect === true).length}
              </p>
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

        {attempt.sectionResults && attempt.sectionResults.length > 1 ? (
          <div className="mt-6 grid gap-2 sm:grid-cols-4">
            {attempt.sectionResults.map((section) => (
              <div key={section.sectionId} className="rounded-md border border-line bg-canvas px-3 py-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                  {section.label}
                </p>
                <p className="font-serif text-lg text-ink">
                  {section.marksAwarded}/{section.marksAvailable}
                </p>
                <p className="text-[0.68rem] text-faint">{section.title}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {[
          { id: 'all', label: `All (${attempt.questionResults.length})` },
          { id: 'missed', label: `Needs review (${missed.length})` },
          { id: 'written', label: `Written (${written.length})` },
        ].map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFilter(option.id as typeof filter)}
            className={cn(
              'rounded-md border px-3 py-1.5 text-sm font-medium transition-colors',
              filter === option.id
                ? 'border-accent bg-accent-soft text-accent-strong'
                : 'border-line text-muted hover:border-accent/40 hover:text-ink',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {visible.length > 0 ? (
          visible.map((result) => <ResultCard key={result.questionId} result={result} />)
        ) : (
          <div className="rounded-lg border border-line bg-surface p-6 text-center text-sm text-muted">
            Nothing to show in this filter.
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to={
            attempt.kind === 'mock-exam'
              ? `/exam/${attempt.refId}`
              : attempt.kind === 'sql-exam'
                ? '/sql/exam'
                : `/test/${attempt.refId}`
          }
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          Try this paper again
        </Link>
        <Link
          to="/is/progress"
          className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          View all progress
        </Link>
      </div>
    </div>
  )
}
