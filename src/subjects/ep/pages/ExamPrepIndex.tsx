import { Link } from 'react-router-dom'
import { CramSection } from '../../../shell/CramSection'
import { chapterById } from '../content'

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="rounded-lg border border-line bg-surface/80 px-4 py-3 backdrop-blur">
    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
    {hint ? <p className="text-xs text-faint">{hint}</p> : null}
  </div>
)

export const ExamPrepIndex = () => {
  const chapters = Object.values(chapterById)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
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
          Exam Prep
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
          Everything you need to walk into your exams confident.
        </h1>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
          Read clean, faithful notes, revise the summaries, then test yourself with chapter tests,
          five full mock exams and a dedicated 100-mark SQL paper built on the exact paper
          structure: 20 multiple choice, 20 matching, 20 essay and 40 SQL marks.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/exam-prep/chapter/ep-01"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
          >
            Start with Chapter 1
          </Link>
          <Link
            to="/exam-prep/chapter/ep-10"
            className="rounded-md border border-gold/50 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            Browse chapters
          </Link>
          <Link
            to="/"
            className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            ← All subjects
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Total chapters" value={`${chapters.length} / ${chapters.length}`} />
          <Stat label="Study mode" value="Progress tracker" hint="Track your progress" />
          <Stat
            label="Coverage"
            value="100%"
            hint="Full syllabus coverage"
          />
          <Stat
            label="Support"
            value="Expert notes"
            hint="CPUT faculty created"
          />
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Study sections
              </p>
              <h2 className="mt-1">Six sections, one clear path</h2>
            </div>
            <Link
              to="/exam-prep/chapter/ep-01"
              className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
            >
              View all chapters →
            </Link>
          </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map(chapter => (
            <Link
              key={chapter.id}
              to={`/exam-prep/chapter/${chapter.id}`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-card transition-all duration-300 ease-spring hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-float"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-soft opacity-0 transition-opacity duration-500 group-hover:opacity-40 blur-2xl"
              />
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft font-mono text-sm font-semibold text-accent-strong transition-transform duration-300 group-hover:scale-110">
                  {String(chapter.number).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-canvas px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-faint group-hover:text-accent">
                  Topic
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-tight transition-colors group-hover:text-accent-strong">{chapter.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted group-hover:text-ink/80">{chapter.description}</p>
              <div className="mt-auto flex items-center justify-between pt-6">
                <div className="flex flex-col">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gold">{chapter.examWeight.split('—')[0].trim()}</span>
                  <span className="text-[0.65rem] text-faint">{chapter.sections.length} modules</span>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-accent-strong opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
        </div>

        <CramSection subject="ep" />
      </div>
    </div>
  )
}