import type { ExamSection, MockExam, Question } from '../types'
import { essayByChapter, matchingSets, mcqByChapter, sqlByChapter } from './bank'

const chapters = ['ch08', 'ch09', 'ch10', 'ch11', 'ch12']

const pick = <T,>(items: T[], start: number, count: number): T[] =>
  Array.from({ length: count }, (_, offset) => items[(start + offset) % items.length])

const reId = (question: Question, prefix: string): Question => ({
  ...question,
  id: `${prefix}-${question.id}`,
})

const buildExam = (
  index: number,
  id: string,
  title: string,
  description: string,
  focus: string,
): MockExam => {
  const order = index % 2 === 0 ? chapters : [...chapters].reverse()
  const mcqStart = (index * 4) % 12
  const essayStart = index % 3
  const sqlStart = (index * 2) % 4

  const mcqs = order.flatMap((chapter) =>
    pick(mcqByChapter[chapter], mcqStart, 4).map((question) =>
      reId(question, `${id}-a-${chapter}`),
    ),
  )

  const matching = matchingSets[index % matchingSets.length]

  const essays = order.flatMap((chapter) =>
    pick(essayByChapter[chapter], essayStart, 1).map((question) =>
      reId(question, `${id}-c-${chapter}`),
    ),
  )

  const sqls = order.flatMap((chapter) =>
    pick(sqlByChapter[chapter], sqlStart, 2).map((question) =>
      reId(question, `${id}-d-${chapter}`),
    ),
  )

  const sections: ExamSection[] = [
    {
      id: 'mcq',
      label: 'Section A',
      title: 'Multiple-Choice Questions',
      format: '20 multiple-choice questions',
      marks: 20,
      instructions:
        'Choose the one best answer for each question. Each question is worth 1 mark. There is no negative marking.',
      questions: mcqs,
    },
    {
      id: 'matching',
      label: 'Section B',
      title: 'Matching',
      format: '10 matching items',
      marks: 20,
      instructions:
        'Match each term in the left column to the correct description. Each item is worth 2 marks. A description may be used once only.',
      matchingOptions: matching.options,
      questions: matching.questions.map((question) =>
        reId(question, `${id}-b`),
      ),
    },
    {
      id: 'essay',
      label: 'Section C',
      title: 'Essay Questions',
      format: '5 essay questions',
      marks: 20,
      instructions:
        'Answer all five questions. Each essay is worth 4 marks. Use full sentences and support each point with the correct terminology.',
      questions: essays,
    },
    {
      id: 'sql',
      label: 'Section D',
      title: 'SQL and Application',
      format: '8 SQL questions',
      marks: 40,
      instructions:
        'Answer all eight questions. Each question is worth 5 marks. Write valid SQL and show the clauses clearly.',
      questions: sqls,
    },
  ]

  return {
    id,
    title,
    description,
    focus,
    totalMarks: 100,
    durationMinutes: 180,
    instructions:
      'This paper is worth 100 marks and has a 180-minute time limit. Answer all questions in all four sections. Section A (20), Section B (20), Section C (20) and Section D (40). Manage your time: about 30 minutes for Section A, 25 for Section B, 35 for Section C and 90 for Section D.',
    sections,
  }
}

export const mockExams: MockExam[] = [
  buildExam(
    0,
    'mock-1',
    'Mock Exam 1 — SQL and Database Design',
    'A foundation paper weighted toward Advanced SQL and database design, with transactions, performance and distributed concepts represented in every section.',
    'Chapter 8 and Chapter 9 emphasis',
  ),
  buildExam(
    1,
    'mock-2',
    'Mock Exam 2 — Design, Transactions and Recovery',
    'A paper weighted toward database design and transaction management, including concurrency control, isolation and recovery.',
    'Chapter 9 and Chapter 10 emphasis',
  ),
  buildExam(
    2,
    'mock-3',
    'Mock Exam 3 — Performance and Distributed Systems',
    'A paper weighted toward performance tuning, query optimization, distributed databases, replication and the CAP theorem.',
    'Chapter 11 and Chapter 12 emphasis',
  ),
  buildExam(
    3,
    'mock-4',
    'Mock Exam 4 — Integrated Paper I',
    'A balanced paper covering all five chapters. Use this to test your ability to switch between topics under time pressure.',
    'Balanced coverage of Chapters 8 to 12',
  ),
  buildExam(
    4,
    'mock-5',
    'Mock Exam 5 — Integrated Paper II',
    'A second balanced paper with a different selection of questions. Sit this after Mock Exam 4 to confirm your recall is stable.',
    'Balanced coverage of Chapters 8 to 12',
  ),
]
