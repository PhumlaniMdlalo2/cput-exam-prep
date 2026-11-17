import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CramSection } from '../../shell/CramSection';
import { useRouter, getRouteParams } from './lib/router';
import { chapters } from './content/chapters';
import { chapterTests } from './content/tests';
import { mocks } from './content/mocks';
import { storage } from './lib/storage';
import type { Question } from './types/content';
import { ExamView, ResultsView } from './views/ExamView';
import ChapterDetailView from './views/ChapterDetailView';
import { cn } from './lib/cn';

const sectionMarks = (questions: Question[]) => questions.reduce((total, q) => total + q.marks, 0);

const PMApp: React.FC = () => {
  const { route, navigate } = useRouter();
  const { view, id, subId } = useMemo(() => getRouteParams(route), [route]);
  const progress = useMemo(() => storage.getProgress(), [route]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [route]);

  return (
    <div>
      {view === 'home' && <HomeView progress={progress} navigate={navigate} />}
      {view === 'exams' && <ExamsListView navigate={navigate} progress={progress} />}
      {view === 'exam' && id && <ExamView examId={id} type="mock" />}
      {view === 'test' && id && <ExamView examId={id} type="test" />}
      {view === 'results' && id && subId && <ResultsView examId={id} type={subId as 'mock' | 'test'} />}
      {view === 'chapters' && <ChaptersListView navigate={navigate} progress={progress} />}
      {view === 'chapter' && id && <ChapterDetailView id={id} navigate={navigate} />}
      {!['home', 'exams', 'exam', 'test', 'results', 'chapters', 'chapter'].includes(view) && (
        <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">404</p>
          <h1 className="mt-2 font-serif text-3xl">Page not found</h1>
          <p className="mt-2 text-sm text-muted">The view "{view}" does not exist.</p>
          <button
            type="button"
            onClick={() => navigate('home')}
            className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
          >
            Back home
          </button>
        </div>
      )}
    </div>
  );
};

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="rounded-lg border border-line bg-surface/80 px-4 py-3 backdrop-blur">
    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
    {hint ? <p className="text-xs text-faint">{hint}</p> : null}
  </div>
);

const HomeView: React.FC<{ progress: ReturnType<typeof storage.getProgress>; navigate: (route: string) => void }> = ({
  progress,
  navigate
}) => {
  const examRecords = Object.values(progress.completedExams);
  const chapterRecords = Object.values(progress.completedChapters);
  const allRecords = [...examRecords, ...chapterRecords];
  const average =
    allRecords.length > 0
      ? Math.round(allRecords.reduce((total, record) => total + record.score, 0) / allRecords.length)
      : null;
  const bestMock = examRecords.reduce<number | null>(
    (best, record) => (best === null ? record.score : Math.max(best, record.score)),
    null
  );

  return (
    <div>
      <section className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft opacity-70 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-gold-soft opacity-60 blur-3xl"
        />
        <div className="relative">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
            CPUT · Third year · Project Management
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Everything you need to walk into Chapters 11–15 confident.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
            Read clean, faithful notes, revise the summaries, then test yourself with chapter tests and
            five full mock exams built on the exact paper structure: objective questions, calculations
            and written answers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('chapter/ch11')}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
            >
              Start with Chapter 11
            </button>
            <button
              type="button"
              onClick={() => navigate('exams')}
              className="rounded-md border border-gold/50 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Browse mock exams
            </button>
            <button
              type="button"
              onClick={() => navigate('chapters')}
              className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
            >
              Open the notes
            </button>
            <Link
              to="/"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
            >
              ← All subjects
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Mock exams" value={`${examRecords.length} / ${mocks.length}`} />
            <Stat label="Chapter tests" value={`${chapterRecords.length} / ${chapterTests.length}`} />
            <Stat
              label="Average score"
              value={average !== null ? `${average}%` : '—'}
              hint={allRecords.length === 0 ? 'No attempts yet' : 'Across all attempts'}
            />
            <Stat
              label="Best mock"
              value={bestMock !== null ? `${bestMock}%` : '—'}
              hint={bestMock === null ? 'Sit one to find out' : 'Personal best'}
            />
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              The content
            </p>
            <h2 className="mt-1">Four chapters, one clear path</h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('chapters')}
            className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            View all chapters →
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter) => {
            const record = progress.completedChapters[chapter.id];
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => navigate(`chapter/${chapter.id}`)}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 text-left shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft font-mono text-sm font-semibold text-accent-strong">
                    {String(chapter.number).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
                      record ? 'bg-success-soft text-success' : 'bg-canvas text-faint'
                    )}
                  >
                    {record ? 'Tested' : 'Not started'}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight">{chapter.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{chapter.description}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-faint">
                  <span>{chapter.sections.length} sections</span>
                  <span className="font-medium text-accent-strong">
                    {record ? `Best test ${Math.round(record.score)}%` : 'Open chapter →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Practice under pressure
            </p>
            <h2 className="mt-1">Five full mock exams</h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('exams')}
            className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            All exams →
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {mocks.map((exam) => {
            const record = progress.completedExams[exam.id];
            const totalMarks = exam.sections.reduce(
              (total, section) => total + sectionMarks(section.questions),
              0
            );
            return (
              <button
                key={exam.id}
                type="button"
                onClick={() => navigate(`exam/${exam.id}`)}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 text-left shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    {exam.theme}
                  </span>
                  <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                    {record ? `Best ${Math.round(record.score)}%` : 'Not attempted'}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl leading-tight">{exam.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{exam.description}</p>
                <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-faint">
                  <span>{totalMarks} marks</span>
                  <span>{exam.timeLimitMinutes} minutes</span>
                  <span className="ml-auto font-medium text-accent-strong">Open exam →</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <CramSection subject="pm" />

      <section className="mt-14 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <h2 className="font-serif text-2xl">How to use this site</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Read and mark',
              text: 'Work through a chapter, use the summary before you close it, and note the exam focus areas.'
            },
            {
              step: '02',
              title: 'Test the chapter',
              text: 'Take the chapter test. Review every missed point against the model answer.'
            },
            {
              step: '03',
              title: 'Sit a mock',
              text: 'Use the full papers to practise timing, then review the marking guide question by question.'
            }
          ].map((item) => (
            <div key={item.step}>
              <p className="font-mono text-xs text-gold">{item.step}</p>
              <h3 className="mt-1 text-lg">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ExamsListView: React.FC<{
  navigate: (route: string) => void;
  progress: ReturnType<typeof storage.getProgress>;
}> = ({ navigate, progress }) => {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Practice papers
      </p>
      <h1 className="mt-2">Five full mock exams</h1>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-muted">
        Each paper follows the exam structure: Section A objective questions, Section B calculations
        and Section C written questions. Total: 100 marks in 120 minutes.
      </p>

      <div className="mt-8 space-y-4">
        {mocks.map((exam, index) => {
          const record = progress.completedExams[exam.id];
          const totalMarks = exam.sections.reduce(
            (total, section) => total + sectionMarks(section.questions),
            0
          );
          return (
            <div
              key={exam.id}
              className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    Paper {index + 1} · {exam.theme}
                  </p>
                  <h2 className="mt-1 font-serif text-xl leading-tight">{exam.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{exam.description}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-serif text-2xl text-ink">
                    {record ? `${Math.round(record.score)}%` : '—'}
                  </p>
                  <p className="text-xs text-faint">{record ? 'Personal best' : 'Not attempted'}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {exam.sections.map((section) => (
                  <div key={section.id} className="rounded-md border border-line bg-canvas px-3 py-2">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                      {section.title}
                    </p>
                    <p className="mt-0.5 text-xs text-ink/80">{section.instructions[0]}</p>
                    <p className="mt-0.5 text-[0.68rem] text-faint">
                      {sectionMarks(section.questions)} marks
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate(`exam/${exam.id}`)}
                  className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
                >
                  {record ? 'Sit again' : 'Start exam'}
                </button>
                <span className="text-xs text-faint">
                  {totalMarks} marks · {exam.timeLimitMinutes} minutes
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Check your understanding
            </p>
            <h2 className="mt-1">Chapter tests</h2>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {chapterTests.map((test) => {
            const record = progress.completedChapters[test.chapterId];
            const totalMarks = test.questions.reduce((total, question) => total + question.marks, 0);
            return (
              <div
                key={test.id}
                className="flex flex-wrap items-center gap-4 rounded-xl border border-line bg-surface p-5 shadow-card"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg leading-tight">{test.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{test.description}</p>
                  <p className="mt-1 text-xs text-faint">
                    {test.questions.length} questions · {totalMarks} marks ·{' '}
                    {test.timeLimitMinutes} minutes
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-serif text-xl text-ink">
                    {record ? `${Math.round(record.score)}%` : '—'}
                  </p>
                  <p className="text-xs text-faint">{record ? 'Personal best' : 'Not attempted'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`test/${test.id}`)}
                  className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {record ? 'Sit again' : 'Take test'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const ChaptersListView: React.FC<{
  navigate: (route: string) => void;
  progress: ReturnType<typeof storage.getProgress>;
}> = ({ navigate, progress }) => {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Study material
      </p>
      <h1 className="mt-2">Chapters 11–15</h1>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-muted">
        Every chapter keeps your original wording and structure, adds exam-focused summaries and key
        terms, and ends with a chapter test.
      </p>

      <div className="mt-8 space-y-4">
        {chapters.map((chapter) => {
          const record = progress.completedChapters[chapter.id];
          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => navigate(`chapter/${chapter.id}`)}
              className="group flex w-full flex-col gap-4 rounded-xl border border-line bg-surface p-5 text-left shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-float sm:flex-row sm:items-center sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono text-base font-semibold text-accent-strong">
                {String(chapter.number).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-serif text-xl leading-tight">{chapter.title}</h2>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
                      record ? 'bg-success-soft text-success' : 'bg-canvas text-faint'
                    )}
                  >
                    {record ? 'Tested' : 'Not started'}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted">{chapter.subtitle}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{chapter.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                <span className="text-xs text-faint">{chapter.sections.length} sections</span>
                <span className="text-xs font-medium text-accent-strong">
                  {record ? `Best test ${Math.round(record.score)}%` : 'Open chapter →'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PMApp;
