import type { ExamBlueprint } from '../types/content';

export const examBlueprint: ExamBlueprint = {
  totalMarks: 100,
  objectiveMarks: 20,
  calculationMarks: 30,
  writtenMarks: 50,
  timeLimitMinutes: 120,
  sectionA: { multipleChoice: 10, trueFalse: 10, marksEach: 1 },
  sectionB: { questions: 3, marksEach: 10 },
  sectionC: { questions: 5, marksEach: 10, chapterAllocation: { ch11: 2, ch12: 2, ch15: 1 } }
};

export const blueprintNotes = [
  'The 20 / 30 / 50 mark split is taken directly from your exam scope.',
  'The exact number of questions and the 120-minute limit are not stated in your scope; they are a configurable interpretation approved for this study site.',
  'Section B follows the Chapter 14 formula set and requires formula, substitution, answer and interpretation.',
  'Section C covers Chapters 11, 12 and 15 only, as stated in the scope.'
];
