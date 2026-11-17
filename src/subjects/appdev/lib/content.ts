import { exams } from '../data/exams'
import { notes } from '../data/notes'
import { topics } from '../data/topics'
import type { Exam, Note, Topic } from '../types'
import { folderLabel, readMinutes } from './markdown'

export type TopicEntry = Topic & { key: string }
export type ExamEntry = Exam & { key: string }
export type NoteEntry = Note & { minutes: number }

export const noteList: NoteEntry[] = Object.values(notes).map((note) => ({
  ...note,
  minutes: readMinutes(note.markdown),
}))

export const topicList: TopicEntry[] = Object.entries(topics).map(([key, topic]) => ({
  ...topic,
  key,
}))

const examOrder = ['original', 'a', 'b', 'c']

export const examList: ExamEntry[] = examOrder
  .filter((key) => exams[key])
  .map((key) => ({ ...exams[key], key }))

export const noteFolders = Array.from(new Set(noteList.map((note) => note.folder))).map(
  (folder) => ({
    folder,
    label: folderLabel(folder),
    notes: noteList.filter((note) => note.folder === folder),
  }),
)

export const topicGroups = [
  {
    label: 'Design patterns',
    topics: topicList.filter((topic) => !topic.key.startsWith('spring-')),
  },
  {
    label: 'Spring Security',
    topics: topicList.filter((topic) => topic.key.startsWith('spring-')),
  },
]

export const getNote = (key: string): NoteEntry | undefined =>
  noteList.find((note) => note.key === key)

export const getTopic = (key: string): TopicEntry | undefined =>
  topicList.find((topic) => topic.key === key)

export const getExam = (key: string): ExamEntry | undefined =>
  examList.find((exam) => exam.key === key)

export const topicForNote = (note: NoteEntry): TopicEntry | undefined =>
  topics[note.key] ? getTopic(note.key) : topicList.find((topic) => topic.note === note.file)

export const noteHref = (key: string): string => `/app-dev/notes/${key}`
export const testHref = (key: string): string => `/app-dev/test/${key}`
export const examHref = (key: string): string => `/app-dev/exam/${key}`

export const noteCounter = (folder: string, index: number): string => {
  if (folder === 'Design patterns') return String(index + 1).padStart(2, '0')
  if (folder === 'Springboot Security') return `S${index + 1}`
  if (folder === 'Spring Boot') return `B${index + 1}`
  return 'PAPER'
}

export const totalMarks = (exam: Exam): number =>
  exam.sections.reduce((sum, section) => sum + section.questions.length * 2, 0)

export const totalQuestions = (exam: Exam): number =>
  exam.sections.reduce((sum, section) => sum + section.questions.length, 0)
