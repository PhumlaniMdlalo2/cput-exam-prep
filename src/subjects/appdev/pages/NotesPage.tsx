import { Link } from 'react-router-dom'
import { noteCounter, noteFolders, noteHref, noteList } from '../lib/content'

export const NotesPage = () => (
  <div>
    <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
        Read the notes
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">Every note, on the site.</h1>
      <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
        {noteList.length} notes from your App Dev vault, rendered cleanly. Read a topic here, then
        take its test while it is still fresh.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          to="/app-dev/tests"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          Take a topic test
        </Link>
        <Link
          to="/app-dev/exams"
          className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          Sit a mock exam
        </Link>
      </div>
    </section>

    <div className="mt-12 space-y-10">
      {noteFolders.map((group) => (
        <section key={group.folder}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl">{group.label}</h2>
            <span className="text-xs text-faint">
              {group.notes.length} {group.notes.length === 1 ? 'note' : 'notes'}
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.notes.map((note, index) => (
              <Link
                key={note.key}
                to={noteHref(note.key)}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft font-mono text-sm font-semibold text-accent-strong">
                    {noteCounter(note.folder, index)}
                  </span>
                  <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                    {note.minutes} min read
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight">{note.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                  {note.file.replace(/\.md$/, '')}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-faint">
                  <span>{group.label}</span>
                  <span className="font-medium text-accent-strong">Read note →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
)
