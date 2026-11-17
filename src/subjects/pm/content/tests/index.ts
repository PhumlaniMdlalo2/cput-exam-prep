import type { ChapterId, ChapterTest } from '../../types/content';
import { chapter11Test } from './ch11';
import { chapter12Test } from './ch12';
import { chapter14Test } from './ch14';
import { chapter15Test } from './ch15';

export const chapterTests: ChapterTest[] = [
  chapter11Test,
  chapter12Test,
  chapter14Test,
  chapter15Test
];

export const testByChapter = chapterTests.reduce<Record<ChapterId, ChapterTest>>(
  (acc, test) => {
    acc[test.chapterId] = test;
    return acc;
  },
  {} as Record<ChapterId, ChapterTest>
);

export function getChapterTest(chapterId: string | undefined): ChapterTest | undefined {
  return chapterTests.find((test) => test.chapterId === chapterId || test.id === chapterId);
}

export function getTestById(id: string | undefined): ChapterTest | undefined {
  if (!id) return undefined;
  return chapterTests.find((test) => test.id === id);
}
