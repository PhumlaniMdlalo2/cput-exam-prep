import type { Chapter, ChapterId } from '../../types/content';
import { chapter11 } from './ch11';
import { chapter12 } from './ch12';
import { chapter14 } from './ch14';
import { chapter15 } from './ch15';

export const chapters: Chapter[] = [chapter11, chapter12, chapter14, chapter15];

export const chapterById = chapters.reduce<Record<ChapterId, Chapter>>(
  (acc, chapter) => {
    acc[chapter.id] = chapter;
    return acc;
  },
  {} as Record<ChapterId, Chapter>
);

export const chapterIds: ChapterId[] = chapters.map((chapter) => chapter.id);

export function getChapter(id: string | undefined): Chapter | undefined {
  if (!id) return undefined;
  return chapters.find((chapter) => chapter.id === id);
}
