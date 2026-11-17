import { Link } from 'react-router-dom'
import { mockExams } from '../content'
import { bestPercentageFor, loadProgress } from '../lib/storage'

export const ExamsPage = () => {
  const progress = loadProgress()

  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Practice papers
      </p>
      <h1 className="mt-2">Five full mock exams</h1>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-muted">
        Each paper follows the review-question structure: Section A (20 multiple choice), Section B
        (20 matching), Section C (20 essay) and Section D (40 SQL). Total: 100 marks in 180 minutes.
      </p>

      <div className="mt-8 rounded-xl border border-gold/40 bg-surface p-5 shadow-card sm:p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
          Dedicated SQL paper
        </p>
        <h2 className="mt-1 font-serif text-xl leading-tight">SQL Examination — Every SQL Topic</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          100 marks in 150 minutes. Fifteen multiple-choice, ten true/false, five short questions and
          twelve SQL coding questions covering single-table queries, grouping, joins, subqueries, set
          operators, DML, DDL, views, sequences, indexes and tuning.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            to="/is/sql/exam"
            className="rounded-md border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Open the SQL exam
          </Link>
          <Link
            to="/is/chapter/sql-lab"
            className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            Revise in the SQL Lab →
          </Link>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {mockExams.map((exam, index) => {
          const best = bestPercentageFor(progress.attempts, 'mock-exam', exam.id)
          const attempts = progress.attempts.filter(
            (attempt) => attempt.kind === 'mock-exam' && attempt.refId === exam.id,
          ).length
          return (
            <div
              key={exam.id}
              className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                    Paper {index + 1} · {exam.focus}
                  </p>
                  <h2 className="mt-1 font-serif text-xl leading-tight">{exam.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{exam.description}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-serif text-2xl text-ink">
                    {best !== null ? `${best}%` : '—'}
                  </p>
                  <p className="text-xs text-faint">
                    {attempts === 0
                      ? 'Not attempted'
                      : `${attempts} attempt${attempts === 1 ? '' : 's'}`}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-4">
                {exam.sections.map((section) => (
                  <div key={section.id} className="rounded-md border border-line bg-canvas px-3 py-2">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                      {section.label}
                    </p>
                    <p className="text-xs text-ink/80">{section.format}</p>
                    <p className="mt-0.5 text-[0.68rem] text-faint">{section.marks} marks</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  to={`/is/exam/${exam.id}`}
                  className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
                >
                  {best !== null ? 'Sit again' : 'Start exam'}
                </Link>
                <span className="text-xs text-faint">
                  {exam.totalMarks} marks · {exam.durationMinutes} minutes
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
