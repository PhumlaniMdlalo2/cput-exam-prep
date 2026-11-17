import type { Chapter } from './types'
import { chapters as chapterList } from './chapters'

export const chapters: Chapter[] = chapterList

export const chapterById: Record<string, Chapter> = Object.fromEntries(
  chapters.map((chapter) => [chapter.id, chapter]),
)

export { chapterTests, testByChapterId } from './tests'
export { mockExams, examById } from './exams'
