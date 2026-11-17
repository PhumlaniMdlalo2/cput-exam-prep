import {
  chapterTests as adtTests,
  chapters as adtChapters,
  mockExams as adtMocks,
} from '../subjects/adt/content'
import {
  chapterTests as isTests,
  chapters as isChapters,
  mockExams as isMocks,
} from '../subjects/is/content'
import { chapters as pmChapters } from '../subjects/pm/content/chapters'
import { chapterTests as pmTests } from '../subjects/pm/content/tests'
import { mocks as pmMocks } from '../subjects/pm/content/mocks'
import {
  examList as appdevExams,
  noteList as appdevNotes,
  topicList as appdevTests,
} from '../subjects/appdev/lib/content'

export type Accent = 'accent' | 'gold' | 'plum'

export interface SubjectNavItem {
  to: string
  label: string
  match: string[]
  exact?: boolean
}

export interface SubjectMeta {
  id: string
  code: string
  name: string
  short: string
  tagline: string
  description: string
  range: string
  href: string
  accent: Accent
  nav: SubjectNavItem[]
  unitLabel?: string
  stats: {
    chapters: number
    tests: number
    exams: number
  }
}

export const accentClasses: Record<
  Accent,
  { tile: string; text: string; soft: string; border: string; hover: string }
> = {
  accent: {
    tile: 'bg-accent text-canvas',
    text: 'text-accent-strong',
    soft: 'bg-accent-soft',
    border: 'border-accent/40',
    hover: 'hover:border-accent/40',
  },
  gold: {
    tile: 'bg-gold text-canvas',
    text: 'text-gold',
    soft: 'bg-gold-soft',
    border: 'border-gold/40',
    hover: 'hover:border-gold/50',
  },
  plum: {
    tile: 'bg-plum text-canvas',
    text: 'text-plum',
    soft: 'bg-plum-soft',
    border: 'border-plum/40',
    hover: 'hover:border-plum/50',
  },
}

export const subjects: SubjectMeta[] = [
  {
    id: 'adt',
    code: 'ADT',
    name: 'Applications Development Theory',
    short: 'App Dev Theory',
    tagline: 'Software evolution to systems engineering',
    description:
      'Seven chapters of software engineering theory — evolution, dependable systems, reliability, safety, security, resilience and systems engineering — with four full mock papers.',
    range: 'Chapters 9–19',
    href: '/adt',
    accent: 'gold',
    nav: [
      { to: '/adt', label: 'Home', match: ['/adt'], exact: true },
      {
        to: '/adt/chapters',
        label: 'Chapters',
        match: ['/adt/chapters', '/adt/chapter', '/adt/test'],
      },
      { to: '/adt/exams', label: 'Mock exams', match: ['/adt/exams', '/adt/exam', '/adt/results'] },
      { to: '/adt/progress', label: 'Progress', match: ['/adt/progress'] },
    ],
    stats: {
      chapters: adtChapters.length,
      tests: adtTests.length,
      exams: adtMocks.length,
    },
  },
  {
    id: 'is',
    code: 'IS',
    name: 'Information Systems',
    short: 'Information Systems',
    tagline: 'Advanced SQL to distributed databases',
    description:
      'Six sections covering advanced SQL, database design, transactions, tuning and distributed databases, plus five mock papers and a dedicated SQL exam.',
    range: 'Chapters 7–12',
    href: '/is',
    accent: 'accent',
    nav: [
      { to: '/is', label: 'Home', match: ['/is'], exact: true },
      {
        to: '/is/chapters',
        label: 'Chapters',
        match: ['/is/chapters', '/is/chapter', '/is/test'],
      },
      { to: '/is/sql/exam', label: 'SQL exam', match: ['/is/sql/exam'] },
      { to: '/is/exams', label: 'Mock exams', match: ['/is/exams', '/is/exam', '/is/results'] },
      { to: '/is/progress', label: 'Progress', match: ['/is/progress'] },
    ],
    stats: {
      chapters: isChapters.length,
      tests: isTests.length,
      exams: isMocks.length,
    },
  },
  {
    id: 'pm',
    code: 'PM',
    name: 'Project Management',
    short: 'Project Management',
    tagline: 'Risk, quality, control and closing',
    description:
      'Four chapters on risk, quality, monitoring and closing, with chapter tests and five full papers mixing objective, calculation and written questions.',
    range: 'Chapters 11–15',
    href: '/pm',
    accent: 'plum',
    nav: [
      { to: '/pm', label: 'Home', match: ['/pm'], exact: true },
      {
        to: '/pm/chapters',
        label: 'Chapters',
        match: ['/pm/chapters', '/pm/chapter', '/pm/test'],
      },
      { to: '/pm/exams', label: 'Mock exams', match: ['/pm/exams', '/pm/exam', '/pm/results'] },
    ],
    stats: {
      chapters: pmChapters.length,
      tests: pmTests.length,
      exams: pmMocks.length,
    },
  },
  {
    id: 'ep',
    code: 'EP',
    name: 'Exam Prep',
    short: 'Exam Prep',
    tagline: 'Practice papers for all subjects',
    description:
      "Full mock exams that mix questions from every chapter. Same timer and marking as the real papers.",
    range: "Ongoing",
    href: "/exam-prep",
    accent: "gold",
    nav: [
      { to: "/exam-prep", label: "Home", match: ["/exam-prep"], exact: true },
      { to: "/exam-prep/chapters", label: "Chapters", match: ["/exam-prep/chapters"] },
      { to: "/exam-prep/exams", label: "Mock exams", match: ["/exam-prep/exams", "/exam-prep/exam", "/exam-prep/results"] },
    ],
    stats: {
      chapters: 2,
      tests: 0,
      exams: 2,
    },
  },
  {
    id: 'appdev',
    code: 'ADP',
    name: 'App Dev',
    short: 'App Dev',
    tagline: 'Design patterns, Spring Boot and security',
    description:
      'Every App Dev note, 18 topic tests and four full mock papers covering design patterns, Spring Boot and Spring Security.',
    range: 'November exams',
    href: '/app-dev',
    accent: 'accent',
    unitLabel: 'Notes',
    nav: [
      { to: '/app-dev', label: 'Home', match: ['/app-dev'], exact: true },
      {
        to: '/app-dev/notes',
        label: 'Notes',
        match: ['/app-dev/notes'],
      },
      {
        to: '/app-dev/tests',
        label: 'Topic tests',
        match: ['/app-dev/tests', '/app-dev/test'],
      },
      { to: '/app-dev/exams', label: 'Mock exams', match: ['/app-dev/exams', '/app-dev/exam'] },
    ],
    stats: {
      chapters: appdevNotes.length,
      tests: appdevTests.length,
      exams: appdevExams.length,
    },
  },
];

export const subjectById = Object.fromEntries(subjects.map((subject) => [subject.id, subject]));

export const totals = subjects.reduce(
  (accumulator, subject) => ({
    chapters: accumulator.chapters + subject.stats.chapters,
    tests: accumulator.tests + subject.stats.tests,
    exams: accumulator.exams + subject.stats.exams,
  }),
  { chapters: 0, tests: 0, exams: 0 },
);

export const subjectForPath = (pathname: string): SubjectMeta | undefined =>
  subjects.find(
    (subject) => pathname === subject.href || pathname.startsWith(`${subject.href}/`),
  );

export const navItemActive = (pathname: string, item: SubjectNavItem): boolean => {
  if (item.exact) return pathname === item.to;
  return item.match.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
};