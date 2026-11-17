import { Link } from 'react-router-dom'
import {
  examHref,
  examList,
  noteCounter,
  noteFolders,
  noteHref,
  noteList,
  testHref,
  topicGroups,
  topicList,
  totalMarks,
  totalQuestions,
} from '../lib/content'

const Stat = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="rounded-lg border border-line bg-surface/80 px-4 py-3 backdrop-blur">
    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
    <p className="mt-1 font-serif text-2xl text-ink">{value}</p>
    {hint ? <p className="text-xs text-faint">{hint}</p> : null}
  </div>
)

export const Home = () => (
  <div>
    <section className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
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
          CPUT · Third year · App Dev
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">
          Every note, topic test and mock paper in one place.
        </h1>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
          Read the notes from your vault, take a short test after each one, then sit a full 100-mark
          mock paper under exam conditions. Every answer is explained, so you always know what to
          revise next.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/app-dev/notes"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
          >
            Read the notes
          </Link>
          <Link
            to="/app-dev/tests"
            className="rounded-md border border-gold/50 bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold hover:text-gold"
          >
            Take a topic test
          </Link>
          <Link
            to="/app-dev/exams"
            className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong"
          >
            Sit a mock exam
          </Link>
          <Link
            to="/"
            className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            ← All subjects
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Notes" value={String(noteList.length)} hint="Read on the site" />
          <Stat label="Topic tests" value={String(topicList.length)} hint="12 marks each" />
          <Stat label="Mock papers" value={String(examList.length)} hint="100 marks each" />
          <Stat
            label="Exam questions"
            value={String(examList.reduce((sum, exam) => sum + totalQuestions(exam), 0))}
            hint={`${totalMarks(examList[0])} marks per paper`}
          />
        </div>
      </div>
    </section>

    <section className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            The notes
          </p>
          <h2 className="mt-1">Read a topic, then test it</h2>
        </div>
        <Link
          to="/app-dev/notes"
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          All notes →
        </Link>
      </div>

      <div className="mt-6 space-y-8">
        {noteFolders.map((group) => (
          <div key={group.folder}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-serif text-xl">{group.label}</h3>
              <span className="text-xs text-faint">
                {group.notes.length} {group.notes.length === 1 ? 'note' : 'notes'}
              </span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h4 className="mt-4 font-serif text-xl leading-tight">{note.title}</h4>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                    {group.label} · read the note, then take its test.
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-xs text-faint">
                    <span>{note.file.replace(/\.md$/, '')}</span>
                    <span className="font-medium text-accent-strong">Read note →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            Active recall
          </p>
          <h2 className="mt-1">Topic tests</h2>
        </div>
        <Link
          to="/app-dev/tests"
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          All topic tests →
        </Link>
      </div>

      <div className="mt-6 space-y-8">
        {topicGroups.map((group) => (
          <div key={group.label}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-serif text-xl">{group.label}</h3>
              <span className="text-xs text-faint">{group.topics.length} tests</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h4 className="mt-4 font-serif text-xl leading-tight">{topic.title}</h4>
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
          </div>
        ))}
      </div>
    </section>

    <section className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            Practice under pressure
          </p>
          <h2 className="mt-1">Full mock exams</h2>
        </div>
        <Link
          to="/app-dev/exams"
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          All mock exams →
        </Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {examList.map((exam) => (
          <Link
            key={exam.key}
            to={examHref(exam.key)}
            className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 ease-spring hover:-translate-y-1 hover:border-accent/40 hover:shadow-float"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                {exam.key === 'original' ? 'Original paper' : `Paper ${exam.key.toUpperCase()}`}
              </span>
              <span className="rounded-full bg-canvas px-2.5 py-0.5 text-[0.68rem] text-muted">
                {totalQuestions(exam)} questions
              </span>
            </div>
            <h3 className="mt-3 font-serif text-xl leading-tight">{exam.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
              True or false, fill in the blanks and multiple choice, marked and explained.
            </p>
            <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-faint">
              <span>{totalMarks(exam)} marks</span>
              <span>{exam.minutes} minutes</span>
              <span className="ml-auto font-medium text-accent-strong">Open exam →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="mt-14 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
      <h2 className="font-serif text-2xl">How to use this site</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {[
          {
            step: '01',
            title: 'Read and mark',
            text: 'Work through a note, then re-read only the sections you could not explain out loud.',
          },
          {
            step: '02',
            title: 'Test the topic',
            text: 'Take the short test right after the note. Read every explanation, including the ones you got right.',
          },
          {
            step: '03',
            title: 'Sit a mock',
            text: 'Use the 120-minute papers to practise timing, then review the marking guide question by question.',
          },
        ].map((item) => (
          <div key={item.step}>
            <p className="font-mono text-xs text-gold">{item.step}</p>
            <h3 className="mt-1 text-lg">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)
