import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { chapterById, chapterTests } from '../content'
import { ContentBlocks } from '../components/ContentBlocks'
import {
  loadProgress,
  markChapterStudied,
  unmarkChapterStudied,
} from '../lib/storage'
import { cn } from '../lib/cn'

export const ChapterPage = () => {
  const { chapterId } = useParams()
  const chapter = chapterId ? chapterById[chapterId] : undefined
  const [studied, setStudied] = useState(() =>
    chapter ? loadProgress().studiedChapters.includes(chapter.id) : false,
  )

  if (!chapter) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Chapter not found</h1>
        <Link to="/is/chapters" className="mt-4 inline-block text-sm font-medium text-accent-strong">
          ← Back to chapters
        </Link>
      </div>
    )
  }

  const test = chapterTests.find((candidate) => candidate.chapterId === chapter.id)

  const toggleStudied = () => {
    if (studied) {
      unmarkChapterStudied(chapter.id)
      setStudied(false)
    } else {
      markChapterStudied(chapter.id)
      setStudied(true)
    }
  }

  return (
    <div>
      <Link
        to="/is/chapters"
        className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
      >
        ← All chapters
      </Link>

      <header className="mt-5 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-mono text-sm font-semibold text-canvas">
            {String(chapter.number).padStart(2, '0')}
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
            {chapter.examWeight}
          </span>
        </div>
        <h1 className="mt-4">{chapter.title}</h1>
        <p className="mt-2 max-w-3xl font-serif text-xl text-muted">{chapter.subtitle}</p>
        <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-ink/80">{chapter.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {test ? (
            <Link
              to={`/is/test/${chapter.id}`}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
            >
              Take the chapter test
            </Link>
          ) : null}
          <button
            type="button"
            onClick={toggleStudied}
            className={cn(
              'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
              studied
                ? 'border-success/50 bg-success-soft text-success'
                : 'border-line text-muted hover:border-accent/40 hover:text-ink',
            )}
          >
            {studied ? 'Marked as studied ✓' : 'Mark as studied'}
          </button>
          <span className="text-xs text-faint">
            {chapter.sections.length} sections · {chapter.keyTerms.length} key terms
          </span>
        </div>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="order-2 lg:order-1">
          <nav className="rounded-xl border border-line bg-surface p-4 shadow-card lg:sticky lg:top-24">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              On this page
            </p>
            <ol className="mt-3 space-y-1.5 text-sm">
              {chapter.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 rounded px-1 py-1 text-muted transition-colors hover:text-accent-strong"
                  >
                    <span className="font-mono text-[0.7rem] text-faint">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#summary" className="block rounded px-1 py-1 text-muted hover:text-accent-strong">
                  Chapter summary
                </a>
              </li>
              <li>
                <a href="#key-terms" className="block rounded px-1 py-1 text-muted hover:text-accent-strong">
                  Key terms
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="order-1 min-w-0 lg:order-2">
          {chapter.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="mb-14 scroll-mt-28">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl">{section.title}</h2>
              </div>
              <ContentBlocks blocks={section.blocks} />
            </section>
          ))}

          <section id="summary" className="mb-14 scroll-mt-28 border-t border-line pt-8">
            <h2 className="text-2xl">Chapter summary</h2>
            <ContentBlocks blocks={chapter.summary} />
          </section>

          <section id="key-terms" className="scroll-mt-28 border-t border-line pt-8">
            <h2 className="text-2xl">Key terms</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {chapter.keyTerms.map((item) => (
                <div key={item.term} className="rounded-lg border border-line bg-surface p-4 shadow-card">
                  <p className="font-serif text-base font-semibold text-ink">{item.term}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.definition}</p>
                </div>
              ))}
            </div>
          </section>

          {test ? (
            <div className="mt-12 rounded-xl border border-line bg-accent-soft/50 p-6 shadow-card">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
                Check your understanding
              </p>
              <h3 className="mt-1 font-serif text-xl">Ready for the {chapter.title} test?</h3>
              <p className="mt-1 text-sm leading-6 text-ink/80">
                {test.questions.length} questions · {test.questions.reduce((total, question) => total + question.marks, 0)} marks · about 35 minutes
              </p>
              <Link
                to={`/is/test/${chapter.id}`}
                className="mt-4 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
              >
                Start the test
              </Link>
            </div>
          ) : null}

          {chapter.id === 'sql-lab' ? (
            <div className="mt-6 rounded-xl border border-gold/40 bg-surface p-6 shadow-card">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                Full SQL paper
              </p>
              <h3 className="mt-1 font-serif text-xl">Sit the dedicated SQL examination</h3>
              <p className="mt-1 text-sm leading-6 text-ink/80">
                100 marks · 150 minutes · 12 handwritten-style SQL coding questions covering every topic in this lab
              </p>
              <Link
                to="/is/sql/exam"
                className="mt-4 inline-block rounded-md border border-gold/60 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-gold hover:text-gold"
              >
                Open the SQL exam
              </Link>
            </div>
          ) : null}
        </article>
      </div>
    </div>
  )
}
