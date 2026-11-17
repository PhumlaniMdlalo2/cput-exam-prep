import { Link, useParams } from 'react-router-dom'
import { mockExams } from '../content'
import { ExamRunner } from '../components/ExamRunner'

export const ExamPage = () => {
  const { examId } = useParams()
  const exam = mockExams.find((candidate) => candidate.id === examId)

  if (!exam) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Exam not found</h1>
        <Link to="/adt/exams" className="mt-4 inline-block text-sm font-medium text-accent-strong">
          ← Back to mock exams
        </Link>
      </div>
    )
  }

  return (
    <ExamRunner
      key={exam.id}
      kind="mock-exam"
      refId={exam.id}
      title={exam.title}
      instructions={exam.instructions}
      durationMinutes={exam.durationMinutes}
      sections={exam.sections}
      backTo="/adt/exams"
      backLabel="All mock exams"
    />
  )
}
