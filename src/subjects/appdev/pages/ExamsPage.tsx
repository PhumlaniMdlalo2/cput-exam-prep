import { Link } from 'react-router-dom'
import { examHref, examList, totalMarks, totalQuestions } from '../lib/content'

export const ExamsPage = () => (
  <div>
    <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
        Practice under pressure
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">Full mock exams.</h1>
      <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
        Four complete papers in the same shape as the real thing: true or false, fill in the blanks
        and multiple choice. Each paper is {totalMarks(examList[0])} marks and 120 minutes, and is
        marked with explanations.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          to="/app-dev/notes"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          Revise the notes
        </Link>
        <Link
          to="/app-dev/tests"
          className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          Warm up with a topic test
        </Link>
      </div>
    </section>

    <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
          <h2 className="mt-3 font-serif text-xl leading-tight">{exam.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            True or false, fill in the blanks and multiple choice. Marked out of{' '}
            {totalMarks(exam)} with an explanation for every question.
          </p>
          <div className="mt-auto flex items-center gap-4 pt-5 text-xs text-faint">
            <span>{totalMarks(exam)} marks</span>
            <span>{exam.minutes} minutes</span>
            <span className="ml-auto font-medium text-accent-strong">Open exam →</span>
          </div>
        </Link>
      ))}
    </div>

    <section className="mt-10 rounded-xl border border-line bg-surface p-6 shadow-card">
      <h2 className="font-serif text-2xl">Exam-day checklist</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
        <li>Start the timer and do not pause it. The paper is 120 minutes for a reason.</li>
        <li>Answer every question; there is no negative marking, so a blank is always a lost mark.</li>
        <li>Read the fill-in answers carefully after marking — spelling matters less than the idea.</li>
        <li>Write down the two or three topics that cost you the most marks and revise those notes next.</li>
      </ul>
    </section>
  </div>
)
