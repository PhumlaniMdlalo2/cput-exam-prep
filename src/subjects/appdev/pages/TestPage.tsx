import { Link, useParams } from 'react-router-dom'
import { QuizRunner } from '../components/QuizRunner'
import { getNote, getTopic, noteHref } from '../lib/content'

export const TestPage = () => {
  const { topicKey } = useParams()
  const topic = topicKey ? getTopic(topicKey) : undefined

  if (!topic) {
    return (
      <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
          Topic test
        </p>
        <h1 className="mt-2 font-serif text-3xl">Test not found</h1>
        <p className="mt-2 text-sm text-muted">
          That topic test does not exist. Pick one from the topic tests index.
        </p>
        <Link
          to="/app-dev/tests"
          className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          All topic tests
        </Link>
      </div>
    )
  }

  const note = getNote(topic.key)

  return (
    <div>
      <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Topic test · {topic.questions.length} questions · {topic.questions.length * 2} marks
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{topic.title}</h1>
        {topic.intro ? (
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">{topic.intro}</p>
        ) : null}
        <div className="mt-7 flex flex-wrap gap-3">
          {note ? (
            <Link
              to={noteHref(note.key)}
              className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
            >
              Read the note
            </Link>
          ) : null}
          <Link
            to="/app-dev/tests"
            className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            All topic tests →
          </Link>
        </div>
      </section>

      <QuizRunner sections={[{ questions: topic.questions }]} mode="test" />
    </div>
  )
}
