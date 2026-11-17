import type { Chapter } from './types'
import { sqlLab } from './chapters/sqlLab'
import { chapter08 } from './chapters/ch08'
import { chapter09 } from './chapters/ch09'
import { chapter10 } from './chapters/ch10'
import { chapter11 } from './chapters/ch11'
import { chapter12 } from './chapters/ch12'

export const chapters: Chapter[] = [sqlLab, chapter08, chapter09, chapter10, chapter11, chapter12]

export const chapterById: Record<string, Chapter> = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, chapter]),
)

export { chapterTests, testByChapterId } from './tests'
export { mockExams } from './exams'
export { sqlExam } from './exams/sqlExam'
