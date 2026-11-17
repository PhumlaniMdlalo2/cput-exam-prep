import { useParams } from 'react-router-dom'
import { loadProgress } from '../lib/storage'

export const ResultsPage = () => {
  const { attemptId } = useParams()
  const progress = loadProgress()
  
  // Find the exam attempt
  const examAttempt = progress.examAttempts[attemptId || '']
  
  if (!examAttempt) {
    return (
      <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
        <h1 className="font-serif text-2xl">No results found</h1>
        <p className="mt-2 text-sm text-muted">That exam attempt doesn't exist.</p>
      </div>
    )
  }
  
  const scorePercentage = Math.round((examAttempt.score / 100) * 100)
  
  return (
    <div className="wrap">
      <div className="rounded-xl border border-line bg-surface p-8 shadow-card">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Exam Results</h1>
          <div className="text-5xl font-serif font-bold text-good mb-4">
            {scorePercentage}%
          </div>
          <p className="text-lg text-muted mb-8">
            {examAttempt.score} / 100 marks
          </p>
        </div>
      </div>
    </div>
  )
}