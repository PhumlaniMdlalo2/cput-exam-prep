import { Link, useParams } from 'react-router-dom'
import '../lib/notes.css'
import { examHref, getNote, testHref, topicForNote } from '../lib/content'
import { folderLabel, renderMarkdown } from '../lib/markdown'

export const NotePage = () => {
  const { noteKey } = useParams()
  const note = noteKey ? getNote(noteKey) : undefined

  if (!note) {
    return (
      <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">Notes</p>
        <h1 className="mt-2 font-serif text-3xl">Note not found</h1>
        <p className="mt-2 text-sm text-muted">
          That note is not in the App Dev study system. Pick one from the notes index.
        </p>
        <Link
          to="/app-dev/notes"
          className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          All notes
        </Link>
      </div>
    )
  }

  const topic = topicForNote(note)

  return (
    <div>
      <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
          {folderLabel(note.folder)} · {note.minutes} min read
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{note.title}</h1>
        <div className="mt-7 flex flex-wrap gap-3">
          {topic ? (
            <Link
              to={testHref(topic.key)}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Take the topic test
            </Link>
          ) : (
            <Link
              to={examHref('original')}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Take the original exam
            </Link>
          )}
          <Link
            to="/app-dev/notes"
            className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
          >
            All notes
          </Link>
        </div>
      </section>

      <article
        className="appdev-note mt-8"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(note.markdown) }}
      />

      <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-6">
        {topic ? (
          <Link
            to={testHref(topic.key)}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-colors hover:bg-accent-strong"
          >
            Take the topic test
          </Link>
        ) : null}
        <Link
          to="/app-dev/notes"
          className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          All notes
        </Link>
      </div>
    </div>
  )
}
