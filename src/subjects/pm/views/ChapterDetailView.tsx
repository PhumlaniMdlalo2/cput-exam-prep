import React from 'react';
import { chapters } from '../content/chapters';
import { chapterTests } from '../content/tests';
import { ContentBlocks } from '../components/ContentBlocks';

const ChapterDetailView: React.FC<{ id: string; navigate: (route: string) => void }> = ({
  id,
  navigate
}) => {
  const chapter = chapters.find((candidate) => candidate.id === id);

  if (!chapter) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Chapter not found</h1>
        <p className="mt-2 text-sm text-muted">Chapter "{id}" does not exist.</p>
        <button
          type="button"
          onClick={() => navigate('chapters')}
          className="mt-4 inline-block text-sm font-medium text-accent-strong"
        >
          ← Back to chapters
        </button>
      </div>
    );
  }

  const test = chapterTests.find((candidate) => candidate.chapterId === chapter.id);
  const testMarks = test
    ? test.questions.reduce((total, question) => total + question.marks, 0)
    : 0;

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate('chapters')}
        className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
      >
        ← All chapters
      </button>

      <header className="mt-5 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-mono text-sm font-semibold text-canvas">
            {String(chapter.number).padStart(2, '0')}
          </span>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
            {chapter.examFocus[0] ?? 'Exam focus'}
          </span>
        </div>
        <h1 className="mt-4">{chapter.title}</h1>
        <p className="mt-2 max-w-3xl font-serif text-xl text-muted">{chapter.subtitle}</p>
        <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-ink/80">{chapter.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {test ? (
            <button
              type="button"
              onClick={() => navigate(`test/${test.id}`)}
              className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
            >
              Take the chapter test
            </button>
          ) : null}
          <span className="text-xs text-faint">
            {chapter.sections.length} sections · {chapter.topics.length} topics
          </span>
        </div>

        {chapter.examFocus.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {chapter.examFocus.map((focus) => (
              <span
                key={focus}
                className="rounded-full border border-line bg-surface px-3 py-0.5 text-[0.7rem] text-muted"
              >
                {focus}
              </span>
            ))}
          </div>
        ) : null}
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
                <a
                  href="#summary"
                  className="block rounded px-1 py-1 text-muted transition-colors hover:text-accent-strong"
                >
                  Chapter summary
                </a>
              </li>
              <li>
                <a
                  href="#quick-reference"
                  className="block rounded px-1 py-1 text-muted transition-colors hover:text-accent-strong"
                >
                  Quick reference
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
            <p className="mt-4 max-w-prose text-[0.98rem] leading-7 text-ink/90">
              {chapter.summary.overview}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {chapter.summary.groups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-line bg-surface p-4 shadow-card"
                >
                  <p className="font-serif text-base font-semibold text-ink">{group.title}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted marker:text-accent">
                    {group.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="quick-reference" className="scroll-mt-28 border-t border-line pt-8">
            <h2 className="text-2xl">Quick reference</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {chapter.summary.quickReference.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-line bg-surface p-4 shadow-card"
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 font-serif text-base text-ink">{item.value}</p>
                  {item.note ? <p className="mt-1 text-xs text-faint">{item.note}</p> : null}
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
                {test.questions.length} questions · {testMarks} marks · about{' '}
                {test.timeLimitMinutes} minutes
              </p>
              <button
                type="button"
                onClick={() => navigate(`test/${test.id}`)}
                className="mt-4 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
              >
                Start the test
              </button>
            </div>
          ) : null}
        </article>
      </div>
    </div>
  );
};

export default ChapterDetailView;
