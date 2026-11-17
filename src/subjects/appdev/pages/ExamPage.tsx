import { Link, useParams } from 'react-router-dom'
import { QuizRunner } from '../components/QuizRunner'
import { examHref, getExam, totalMarks, totalQuestions } from '../lib/content'

export const ExamPage = () => {
  const { examKey } = useParams()
  const exam = examKey ? getExam(examKey) : undefined

  if (!exam) {
    return (
      <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
          Mock exam
        </p>
        <h1 className="mt-2 font-serif text-3xl">Exam not found</h1>
        <p className="mt-2 text-sm text-muted">
          That paper does not exist. Pick one from the mock exams index.
        </p>
        <Link
          to="/app-dev/exams"
          className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
        >
          All mock exams
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="rounded-2xl border border-line bg-surface p-7 shadow-card sm:p-10 lg:p-12">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold">
          {exam.key === 'original' ? 'Original paper' : `Paper ${exam.key.toUpperCase()}`} ·{' '}
          {totalQuestions(exam)} questions · {totalMarks(exam)} marks · {exam.minutes} minutes
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl">{exam.title}</h1>
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
          Answer every question, then submit. The timer starts as soon as the paper opens, and the
          paper is marked with an explanation for every question.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/app-dev/exams"
            className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
          >
            All mock exams
          </Link>
          <Link
            to={examHref('original')}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            Original paper →
          </Link>
        </div>
      </section>

      <QuizRunner sections={exam.sections} mode="exam" minutes={exam.minutes} />
    </div>
  )
}
