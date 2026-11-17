export type AttemptKind = 'chapter-test' | 'mock-exam';

export interface PartAnswer {
  answer?: string;
  working?: string;
}

export interface AnswerRecord {
  optionId?: string;
  text?: string;
  working?: string;
  parts?: Record<string, PartAnswer>;
  selfMarks?: number;
}

export interface Attempt {
  id: string;
  kind: AttemptKind;
  refId: string;
  title: string;
  startedAt: string;
  submittedAt?: string;
  durationSeconds?: number;
  answers: Record<string, AnswerRecord>;
  flagged: string[];
  status: 'in-progress' | 'submitted';
  score?: number;
  maxScore?: number;
  percentage?: number;
  sectionScores?: SectionScore[];
}

export interface SectionScore {
  sectionId: string;
  title: string;
  score: number;
  max: number;
}

export interface StudyProgress {
  studiedChapters: Record<string, string>;
  lastVisited?: string;
}
