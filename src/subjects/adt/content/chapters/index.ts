import type { Chapter } from '../types'
import { chapter09 } from './ch09'
import { chapter10 } from './ch10'
import { chapter11 } from './ch11'
import { chapter12 } from './ch12'
import { chapter13 } from './ch13'
import { chapter14 } from './ch14'
import { chapter19 } from './ch19'

export const chapters: Chapter[] = [
  chapter09,
  chapter10,
  chapter11,
  chapter12,
  chapter13,
  chapter14,
  chapter19,
]

export const chapterById = (id: string): Chapter | undefined =>
  chapters.find((chapter) => chapter.id === id)
