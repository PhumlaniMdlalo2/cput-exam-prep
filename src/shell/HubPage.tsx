import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import { subjectProgress } from './progress'
import { accentClasses, subjects, totals } from './subjects'

const Stat = ({ value, label }: { value: string | number; label: string }) => (
  <div className="rounded-lg border border-line bg-surface/80 px-4 py-3 backdrop-blur">
    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
  </div>
)

const steps = [
  {
    title: 'Read with intent',
    body: 'Each chapter page keeps the summary, key terms and exam traps in one scroll — no hunting through the PDF.',
  },
  {
    title: 'Sit a paper',
    body: 'Chapter tests check the basics. Full mocks mix question types and time pressure so the real thing feels familiar.',
  },
  {
    title: 'Watch the trend',
    body: 'Every attempt is saved in this browser. See the average climb instead of guessing whether you are ready.',
  },
]

export const HubPage = () => (
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
          CPUT · Third year · Exam prep
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
          One calm place for all your papers.
        </h1>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
          {totals.chapters} chapters and {totals.exams} mock papers across Applications Development
          Theory, Information Systems, Project Management and App Dev. Same layout, same shortcuts,
          same progress tracking — just pick a subject.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/adt"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
          >
            Start with App Dev Theory
          </Link>
          <a
            href="#subjects"
            className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
          >
            Browse subjects
          </a>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value={subjects.length} label="Subjects" />
          <Stat value={totals.chapters} label="Chapters" />
          <Stat value={totals.tests} label="Chapter tests" />
          <Stat value={totals.exams} label="Mock papers" />
        </div>
      </div>
    </section>

    <section id="subjects" className="mt-14 scroll-mt-40">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            The library
          </p>
          <h2 className="mt-1">Pick the paper you are writing next.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">
          Each subject keeps its own saved attempts, so practice for one paper never muddies another.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, index) => {
          const accent = accentClasses[subject.accent]
          const progress = subjectProgress(subject.id)
          const unit = subject.unitLabel ?? 'Chapters'
          return (
            <Link
              key={subject.id}
              to={subject.href}
              className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-md font-mono text-sm font-semibold',
                    accent.soft,
                    accent.text,
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium',
                    accent.soft,
                    accent.text,
                  )}
                >
                  {subject.code}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-tight">{subject.name}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{subject.description}</p>

              <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  [unit, subject.stats.chapters],
                  ['Tests', subject.stats.tests],
                  ['Mocks', subject.stats.exams],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-line/70 bg-canvas/40 py-2">
                    <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-faint">
                      {label}
                    </dt>
                    <dd className="mt-0.5 font-serif text-lg leading-tight text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex items-end justify-between gap-3 border-t border-line/70 pt-4 text-xs text-faint">
                <div className="leading-5">
                  <p>
                    {progress.studied > 0
                      ? `${progress.studied}/${subject.stats.chapters} ${unit.toLowerCase()} read`
                      : `No ${unit.toLowerCase()} read yet`}
                  </p>
                  <p>
                    {progress.attempts > 0
                      ? `${progress.attempts} attempt${progress.attempts === 1 ? '' : 's'} · ${progress.average ?? 0}% average`
                      : 'No attempts yet'}
                  </p>
                </div>
                <span className="font-medium text-accent-strong">Open →</span>
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
            The rhythm
          </p>
          <h2 className="mt-1">Read, attempt, review. Repeat.</h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">
          A simple loop beats cramming. Each pass gives the progress page something honest to show.
        </p>
      </div>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-line bg-surface p-6 shadow-card"
          >
            <p className="font-mono text-xs text-gold">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-1 text-lg">{step.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  </div>
)
