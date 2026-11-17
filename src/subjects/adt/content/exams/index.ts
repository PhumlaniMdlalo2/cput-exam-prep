import type { ExamSection, MockExam, Question, QuestionKind } from '../types'
import { questionBanks } from '../bank'

const pool = (type: QuestionKind): Question[] => {
  const groups = questionBanks.map((bank) =>
    bank.questions.filter((question) => question.type === type),
  )
  const longest = Math.max(0, ...groups.map((group) => group.length))
  const interleaved: Question[] = []
  for (let index = 0; index < longest; index += 1) {
    for (const group of groups) {
      if (group[index]) interleaved.push(group[index])
    }
  }
  return interleaved
}

const rotate = (items: Question[], count: number, offset: number): Question[] => {
  if (items.length === 0) return []
  return Array.from(
    { length: count },
    (_, index) => items[(offset + index) % items.length],
  )
}

const marksFor = (questions: Question[]): number =>
  questions.reduce((total, question) => total + question.marks, 0)

const mcqPool = pool('mcq')
const tfPool = pool('truefalse')
const shortPool = pool('short')
const appPool = pool('application')
const essayPool = pool('essay')

const buildSections = (index: number): ExamSection[] => {
  const mcq = rotate(mcqPool, 20, index * 13)
  const tf = rotate(tfPool, 10, index * 7)
  const short = rotate(shortPool, 5, index * 4)
  const application = rotate(appPool, 6, index * 5)
  const essays = rotate(essayPool, 2, index * 3)

  return [
    {
      id: 'section-a',
      label: 'A',
      title: 'Multiple choice',
      format: '20 multiple-choice questions',
      marks: marksFor(mcq),
      instructions:
        'Choose the one best answer for each question. Each question is worth 1 mark.',
      questions: mcq,
    },
    {
      id: 'section-b',
      label: 'B',
      title: 'True or false',
      format: '10 true/false questions',
      marks: marksFor(tf),
      instructions:
        'Indicate whether each statement is true or false. Each question is worth 1 mark.',
      questions: tf,
    },
    {
      id: 'section-c',
      label: 'C',
      title: 'Short answer',
      format: '5 short-answer questions',
      marks: marksFor(short),
      instructions:
        'Answer concisely. Each question is worth 4 marks and is marked against the key points.',
      questions: short,
    },
    {
      id: 'section-d',
      label: 'D',
      title: 'Application',
      format: '6 applied questions',
      marks: marksFor(application),
      instructions:
        'Apply the theory to the scenario given. Each question is worth 5 marks.',
      questions: application,
    },
    {
      id: 'section-e',
      label: 'E',
      title: 'Essay',
      format: '2 essay questions',
      marks: marksFor(essays),
      instructions:
        'Answer both essay questions. Each essay is worth 10 marks and should be structured with an introduction, discussion and conclusion.',
      questions: essays,
    },
  ]
}

const focuses = [
  'Full syllabus — evolution, dependability, reliability, safety, security, resilience and systems engineering.',
  'Full syllabus with emphasis on dependable systems, safety and secure design.',
  'Full syllabus with emphasis on reliability, security and resilience engineering.',
  'Full syllabus with emphasis on evolution, systems engineering and organisational resilience.',
]

export const mockExams: MockExam[] = [0, 1, 2, 3].map((index) => {
  const sections = buildSections(index)
  return {
    id: `mock-${index + 1}`,
    title: `Mock Exam ${index + 1}`,
    description:
      'A full 100-mark paper in the style of the CPUT App Dev Theory examination, covering all chapters.',
    focus: focuses[index],
    totalMarks: sections.reduce((total, section) => total + section.marks, 0),
    durationMinutes: 180,
    instructions:
      'Answer all questions in all five sections. The paper is worth 100 marks and you have 180 minutes. Section A: 20 multiple-choice questions (20 marks). Section B: 10 true/false questions (10 marks). Section C: 5 short-answer questions (20 marks). Section D: 6 application questions (30 marks). Section E: 2 essay questions (20 marks).',
    sections,
  }
})

export const examById = (id: string): MockExam | undefined =>
  mockExams.find((exam) => exam.id === id)
