import { useState } from 'react'
import { Link } from 'react-router-dom'
import { chapterTests, chapters } from '../content'
import {
  bestPercentageFor,
  loadProgress,
  markChapterStudied,
  unmarkChapterStudied,
} from '../lib/storage'
import { cn } from '../lib/cn'

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-ZA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

export const ProgressPage = () => {
  const [progress, setProgress] = useState(() => loadProgress())

  const toggleChapter = (chapterId: string) => {
    const isStudied = progress.studiedChapters.includes(chapterId)
    setProgress(isStudied ? unmarkChapterStudied(chapterId) : markChapterStudied(chapterId))
  }

  const attempts = progress.attempts
  const average =
    attempts.length > 0
      ? Math.round(attempts.reduce((total, attempt) => total + attempt.percentage, 0) / attempts.length)
      : null
  const bestMock = attempts
    .filter((attempt) => attempt.kind === 'mock-exam')
    .reduce<number | null>(
      (best, attempt) => (best === null ? attempt.percentage : Math.max(best, attempt.percentage)),
      null,
    )

  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Your dashboard
      </p>
      <h1 className="mt-2">Progress</h1>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-muted">
        Everything here is stored in this browser only. Use it to see what you have covered and
        which paper to sit next.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-line bg-surface px-4 py-3 shadow-card">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Chapters studied
          </p>
          <p className="mt-1 font-serif text-2xl">
            {progress.studiedChapters.length} / {chapters.length}
          </p>
        </div>
        <div className="rounded-lg border border-line bg-surface px-4 py-3 shadow-card">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Total attempts
          </p>
          <p className="mt-1 font-serif text-2xl">{attempts.length}</p>
        </div>
        <div className="rounded-lg border border-line bg-surface px-4 py-3 shadow-card">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Average score
          </p>
          <p className="mt-1 font-serif text-2xl">{average !== null ? `${average}%` : '—'}</p>
        </div>
        <div className="rounded-lg border border-line bg-surface px-4 py-3 shadow-card">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
            Best mock
          </p>
          <p className="mt-1 font-serif text-2xl">{bestMock !== null ? `${bestMock}%` : '—'}</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl">Chapter checklist</h2>
        <div className="mt-4 space-y-2">
          {chapters.map((chapter) => {
            const isStudied = progress.studiedChapters.includes(chapter.id)
            const test = chapterTests.find((candidate) => candidate.chapterId === chapter.id)
            const best = test ? bestPercentageFor(attempts, 'chapter-test', chapter.id) : null
            return (
              <div
                key={chapter.id}
                className="flex flex-wrap items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 shadow-card"
              >
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  aria-pressed={isStudied}
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded border text-xs transition-colors',
                    isStudied
                      ? 'border-success bg-success-soft text-success'
                      : 'border-line text-transparent hover:border-accent',
                  )}
                >
                  ✓
                </button>
                <div className="min-w-0 flex-1">
                  <Link
                    to={`/adt/chapter/${chapter.id}`}
                    className="font-medium text-ink transition-colors hover:text-accent-strong"
                  >
                    {chapter.number}. {chapter.title}
                  </Link>
                  <p className="text-xs text-faint">
                    {isStudied ? 'Studied' : 'Not started'} · {chapter.sections.length} sections
                  </p>
                </div>
                <span className="text-xs text-muted">
                  {best !== null ? `Best test ${best}%` : 'No test attempt'}
                </span>
                {test ? (
                  <Link
                    to={`/adt/test/${chapter.id}`}
                    className="rounded-md border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    Test
                  </Link>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Attempt history</h2>
        {attempts.length === 0 ? (
          <div className="mt-4 rounded-lg border border-line bg-surface p-6 text-center text-sm text-muted shadow-card">
            No attempts yet. Start with a chapter test or a mock exam.
          </div>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-lg border border-line shadow-card">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-accent-soft/60">
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink">Paper</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink">Type</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink">Date</th>
                  <th className="border-b border-line px-4 py-3 font-semibold text-ink">Score</th>
                  <th className="border-b border-line px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt) => (
                  <tr key={attempt.id} className="bg-surface align-top">
                    <td className="border-b border-line/70 px-4 py-3 text-ink/90">{attempt.title}</td>
                    <td className="border-b border-line/70 px-4 py-3 text-muted">
                      {attempt.kind === 'mock-exam'
                        ? 'Mock exam'
                        : attempt.kind === 'sql-exam'
                          ? 'SQL exam'
                          : 'Chapter test'}
                    </td>
                    <td className="border-b border-line/70 px-4 py-3 text-muted">
                      {formatDate(attempt.completedAt)}
                    </td>
                    <td
                      className={cn(
                        'border-b border-line/70 px-4 py-3 font-semibold',
                        attempt.percentage >= 50 ? 'text-success' : 'text-danger',
                      )}
                    >
                      {attempt.percentage}%
                    </td>
                    <td className="border-b border-line/70 px-4 py-3 text-right">
                      <Link
                        to={`/adt/results/${attempt.id}`}
                        className="text-xs font-medium text-accent-strong hover:underline"
                      >
                        Review →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
