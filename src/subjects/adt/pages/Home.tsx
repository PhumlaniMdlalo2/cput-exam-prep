import { Link } from 'react-router-dom'
import { chapterTests, chapters, mockExams } from '../content'
import { bestPercentageFor, loadProgress } from '../lib/storage'
import { cn } from '../lib/cn'

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="rounded-lg border border-line bg-surface/80 px-4 py-3 backdrop-blur">
    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
    {hint ? <p className="text-xs text-faint">{hint}</p> : null}
  </div>
)

export const Home = () => {
  const progress = loadProgress()
  const studied = progress.studiedChapters.length
  const attempts = progress.attempts.length
  const average =
    attempts > 0
      ? Math.round(
          progress.attempts.reduce((total, attempt) => total + attempt.percentage, 0) / attempts,
        )
      : null
  const bestMock = mockExams.reduce<number | null>((best, exam) => {
    const score = bestPercentageFor(progress.attempts, 'mock-exam', exam.id)
    if (score === null) return best
    return best === null ? score : Math.max(best, score)
  }, null)

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
            CPUT · Third year · Applications Development
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
            Everything you need to walk into Chapters 9–19 confident.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
            Read clean, faithful notes, revise the summaries, then test yourself with chapter tests
            and four full 100-mark mock exams built on the exact paper structure: multiple choice,
            true/false, short answer, application and essay questions.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/adt/chapter/ch09"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
            >
              Start with Chapter 9
            </Link>
            <Link
              to="/adt/chapters"
              className="rounded-md border border-gold/50 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Browse chapters
            </Link>
            <Link
              to="/adt/exams"
              className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
            >
              Browse mock exams
            </Link>
            <Link
              to="/adt/progress"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
            >
              View progress →
            </Link>
            <Link
              to="/"
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
            >
              ← All subjects
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Chapters studied" value={`${studied} / ${chapters.length}`} />
            <Stat label="Attempts" value={String(attempts)} hint="Tests and exams" />
            <Stat
              label="Average score"
              value={average !== null ? `${average}%` : '—'}
              hint={attempts === 0 ? 'No attempts yet' : 'Across all attempts'}
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
            <h2 className="mt-1">Seven chapters, one clear path</h2>
          </div>
          <Link
            to="/adt/chapters"
            className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            View all chapters →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => {
            const isStudied = progress.studiedChapters.includes(chapter.id)
            const test = chapterTests.find((candidate) => candidate.chapterId === chapter.id)
            const best = test ? bestPercentageFor(progress.attempts, 'chapter-test', test.chapterId) : null
            return (
              <Link
                key={chapter.id}
                to={`/adt/chapter/${chapter.id}`}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft font-mono text-sm font-semibold text-accent-strong">
                    {String(chapter.number).padStart(2, '0')}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
                      isStudied
                        ? 'bg-success-soft text-success'
                        : 'bg-canvas text-faint',
                    )}
                  >
                    {isStudied ? 'Studied' : 'Not started'}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight">{chapter.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{chapter.description}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-faint">
                  <span>{chapter.examWeight.split('—')[0].trim()}</span>
                  <span className="font-medium text-accent-strong">
                    {best !== null ? `Best test ${best}%` : 'Open chapter →'}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Practice under pressure
            </p>
            <h2 className="mt-1">Four full mock exams</h2>
          </div>
          <Link
            to="/adt/exams"
            className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            All exams →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {mockExams.map((exam) => {
            const best = bestPercentageFor(progress.attempts, 'mock-exam', exam.id)
            return (
              <Link
                key={exam.id}
                to={`/adt/exam/${exam.id}`}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    {exam.focus}
                  </span>
                  <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                    {best !== null ? `Best ${best}%` : 'Not attempted'}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl leading-tight">{exam.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{exam.description}</p>
                <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-faint">
                  <span>{exam.totalMarks} marks</span>
                  <span>{exam.durationMinutes} minutes</span>
                  <span className="ml-auto font-medium text-accent-strong">Open exam →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-14 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <h2 className="font-serif text-2xl">How to use this site</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Read and mark',
              text: 'Work through a chapter, use the summary before you close it, and mark it as studied.',
            },
            {
              step: '02',
              title: 'Test the chapter',
              text: 'Take the 25-mark chapter test. Review every missed point against the model answer.',
            },
            {
              step: '03',
              title: 'Sit a mock',
              text: 'Use the 180-minute papers to practise timing, then review the marking guide question by question.',
            },
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
  )
}
