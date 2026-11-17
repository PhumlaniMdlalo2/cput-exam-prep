import { sqlExam } from '../content'
import { ExamRunner } from '../components/ExamRunner'

export const SqlExamPage = () => (
  <ExamRunner
    key={sqlExam.id}
    kind="sql-exam"
    refId={sqlExam.id}
    title={sqlExam.title}
    instructions={sqlExam.instructions}
    durationMinutes={sqlExam.durationMinutes}
    sections={sqlExam.sections}
    backTo="/is/chapter/sql-lab"
    backLabel="SQL Lab"
  />
)
