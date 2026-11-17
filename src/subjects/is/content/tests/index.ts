import type { ChapterTest } from '../types'
import { testSqlLab } from './sqlLab'
import { test08 } from './ch08'
import { test09 } from './ch09'
import { test10 } from './ch10'
import { test11 } from './ch11'
import { test12 } from './ch12'

export const chapterTests: ChapterTest[] = [testSqlLab, test08, test09, test10, test11, test12]

export const testByChapterId: Record<string, ChapterTest> = Object.fromEntries(
  chapterTests.map((test) => [test.chapterId, test]),
)
