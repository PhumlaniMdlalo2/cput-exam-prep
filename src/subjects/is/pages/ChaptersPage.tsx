import { Link } from 'react-router-dom'
import { chapters, chapterTests } from '../content'
import { bestPercentageFor, loadProgress } from '../lib/storage'
import { cn } from '../lib/cn'

export const ChaptersPage = () => {
  const progress = loadProgress()

  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
        Study material
      </p>
      <h1 className="mt-2">Chapters 7–12</h1>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-muted">
        Every chapter keeps your original wording and structure, adds exam-focused summaries and key
        terms, and ends with a 30-mark chapter test. Chapter 7 is the SQL Lab: one practical section
        for every SQL topic in the syllabus.
      </p>

      <div className="mt-8 space-y-4">
        {chapters.map((chapter) => {
          const isStudied = progress.studiedChapters.includes(chapter.id)
          const test = chapterTests.find((candidate) => candidate.chapterId === chapter.id)
          const best = test ? bestPercentageFor(progress.attempts, 'chapter-test', test.chapterId) : null
          return (
            <Link
              key={chapter.id}
              to={`/is/chapter/${chapter.id}`}
              className="group flex flex-col gap-4 rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-float sm:flex-row sm:items-center sm:p-6"
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
                      isStudied ? 'bg-success-soft text-success' : 'bg-canvas text-faint',
                    )}
                  >
                    {isStudied ? 'Studied' : 'Not started'}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted">{chapter.subtitle}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{chapter.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
                <span className="text-xs text-faint">{chapter.sections.length} sections</span>
                <span className="text-xs font-medium text-accent-strong">
                  {best !== null ? `Best test ${best}%` : 'Open chapter →'}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
