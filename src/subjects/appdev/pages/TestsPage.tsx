import { Link } from 'react-router-dom'
import { testHref, topicGroups, topicList } from '../lib/content'

export const TestsPage = () => (
  <div>
    <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
        Active recall
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
        Test yourself after every note.
      </h1>
      <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
        {topicList.length} short tests, each marked out of 12 with an explanation for every answer.
        Read the note first, then come straight here.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          to="/app-dev/notes"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          Read the notes
        </Link>
        <Link
          to="/app-dev/exams"
          className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          Sit a full paper
        </Link>
      </div>
    </section>

    <div className="mt-12 space-y-10">
      {topicGroups.map((group) => (
        <section key={group.label}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl">{group.label}</h2>
            <span className="text-xs text-faint">{group.topics.length} tests</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.topics.map((topic) => (
              <Link
                key={topic.key}
                to={testHref(topic.key)}
                className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-soft font-mono text-sm font-semibold text-gold">
                    {topic.questions.length}
                  </span>
                  <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                    {topic.questions.length * 2} marks
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight">{topic.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                  {topic.intro ?? 'A short test with an explanation for every answer.'}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-faint">
                  <span>{topic.questions.length} questions</span>
                  <span className="font-medium text-accent-strong">Take test →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
)
