import { Link, useParams } from 'react-router-dom'
import { chapterById, testByChapterId } from '../content'
import { ExamRunner } from '../components/ExamRunner'

export const TestPage = () => {
  const { chapterId } = useParams()
  const chapter = chapterId ? chapterById[chapterId] : undefined
  const test = chapterId ? testByChapterId[chapterId] : undefined

  if (!chapter || !test) {
    return (
      <div className="rounded-xl border border-line bg-surface p-8 text-center shadow-card">
        <h1 className="font-serif text-2xl">Test not found</h1>
        <Link to="/is/chapters" className="mt-4 inline-block text-sm font-medium text-accent-strong">
          ← Back to chapters
        </Link>
      </div>
    )
  }

  return (
    <ExamRunner
      key={test.chapterId}
      kind="chapter-test"
      refId={test.chapterId}
      title={test.title}
      instructions={test.instructions}
      durationMinutes={null}
      sections={[
        {
          id: 'test',
          label: '',
          title: 'Questions',
          marks: test.questions.reduce((total, question) => total + question.marks, 0),
          instructions: test.instructions,
          questions: test.questions,
        },
      ]}
      backTo={`/is/chapter/${chapter.id}`}
      backLabel={chapter.title}
    />
  )
}
