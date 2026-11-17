// Storage utility for local persistence
export interface CompletedRecord {
  score: number;
  total: number;
  date: string;
  answers?: Record<string, any>;
}

export interface Progress {
  completedExams: Record<string, CompletedRecord>;
  completedChapters: Record<string, CompletedRecord>;
}

export interface ActiveExam {
  id: string;
  answers: Record<string, any>;
  timeLeftSeconds: number;
  startTime: string;
}

export type ThemePreference = 'light' | 'dark';

const STORAGE_KEYS = {
  PROGRESS: 'pm_exam_progress',
  ACTIVE_EXAM: 'pm_active_exam',
  THEME: 'pm-exam-theme'
};

export const storage = {
  getProgress(): Progress {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!data) return { completedExams: {}, completedChapters: {} };
    try {
      const parsed = JSON.parse(data);
      return {
        completedExams: parsed.completedExams ?? {},
        completedChapters: parsed.completedChapters ?? {}
      };
    } catch {
      return { completedExams: {}, completedChapters: {} };
    }
  },

  saveProgress(progress: Progress) {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  },

  getActiveExam(): ActiveExam | null {
    const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM);
    return data ? JSON.parse(data) : null;
  },

  setActiveExam(exam: ActiveExam | null) {
    if (exam) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, JSON.stringify(exam));
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM);
    }
  },

  getTheme(): ThemePreference {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  setTheme(theme: ThemePreference) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  clearAll() {
    localStorage.clear();
  }
};
