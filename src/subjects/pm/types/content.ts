export type ChapterId = 'ch11' | 'ch12' | 'ch14' | 'ch15';

export type QuestionType = 'mcq' | 'truefalse' | 'short' | 'essay' | 'calculation';

export type Tone = 'info' | 'tip' | 'warn' | 'exam' | 'definition';

export interface NoteTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export type NoteBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; table: NoteTable }
  | { type: 'definition'; term: string; text: string }
  | { type: 'formula'; name: string; expression: string; note?: string }
  | { type: 'callout'; tone: Tone; title?: string; text: string; items?: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string; source?: string };

export interface NoteSection {
  id: string;
  title: string;
  blocks: NoteBlock[];
}

export interface SummaryGroup {
  title: string;
  points: string[];
}

export interface QuickReferenceItem {
  label: string;
  value: string;
  note?: string;
}

export interface ChapterSummary {
  overview: string;
  groups: SummaryGroup[];
  quickReference: QuickReferenceItem[];
}

export interface Chapter {
  id: ChapterId;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  examFocus: string[];
  topics: string[];
  sections: NoteSection[];
  summary: ChapterSummary;
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface MarkingPoint {
  text: string;
  keywords?: string[];
  marks?: number;
}

export interface AnswerPart {
  id: string;
  label: string;
  prompt: string;
  marks: number;
  numericAnswer?: number;
  tolerance?: number;
  unit?: string;
  formula?: string;
  modelAnswer: string;
  markingGuide?: MarkingPoint[];
}

export interface Question {
  id: string;
  type: QuestionType;
  marks: number;
  prompt: string;
  caseText?: string;
  options?: QuestionOption[];
  correctOptionId?: string;
  modelAnswer?: string;
  markingGuide?: MarkingPoint[];
  numericAnswer?: number;
  tolerance?: number;
  unit?: string;
  formula?: string;
  parts?: AnswerPart[];
  explanation: string;
  commonMistake?: string;
}

export interface ChapterTest {
  id: string;
  chapterId: ChapterId;
  title: string;
  description: string;
  instructions: string[];
  timeLimitMinutes: number;
  questions: Question[];
}

export interface ExamSection {
  id: string;
  title: string;
  instructions: string[];
  questions: Question[];
}

export interface MockExam {
  id: string;
  title: string;
  theme: string;
  description: string;
  timeLimitMinutes: number;
  sections: ExamSection[];
}

export interface ExamBlueprint {
  totalMarks: number;
  objectiveMarks: number;
  calculationMarks: number;
  writtenMarks: number;
  timeLimitMinutes: number;
  sectionA: { multipleChoice: number; trueFalse: number; marksEach: number };
  sectionB: { questions: number; marksEach: number };
  sectionC: { questions: number; marksEach: number; chapterAllocation: Record<string, number> };
}
