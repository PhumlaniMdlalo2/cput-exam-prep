import type { ComponentType } from 'react'
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'
import PMApp from './subjects/pm/PMApp'
import { ChapterPage as AdtChapterPage } from './subjects/adt/pages/ChapterPage'
import { ChaptersPage as AdtChaptersPage } from './subjects/adt/pages/ChaptersPage'
import { ExamPage as AdtExamPage } from './subjects/adt/pages/ExamPage'
import { ExamsPage as AdtExamsPage } from './subjects/adt/pages/ExamsPage'
import { Home as AdtHome } from './subjects/adt/pages/Home'
import { ProgressPage as AdtProgressPage } from './subjects/adt/pages/ProgressPage'
import { ResultsPage as AdtResultsPage } from './subjects/adt/pages/ResultsPage'
import { TestPage as AdtTestPage } from './subjects/adt/pages/TestPage'
import { ChapterPage as IsChapterPage } from './subjects/is/pages/ChapterPage'
import { ChaptersPage as IsChaptersPage } from './subjects/is/pages/ChaptersPage'
import { ExamPage as IsExamPage } from './subjects/is/pages/ExamPage'
import { ExamsPage as IsExamsPage } from './subjects/is/pages/ExamsPage'
import { Home as IsHome } from './subjects/is/pages/Home'
import { ProgressPage as IsProgressPage } from './subjects/is/pages/ProgressPage'
import { ResultsPage as IsResultsPage } from './subjects/is/pages/ResultsPage'
import { SqlExamPage } from './subjects/is/pages/SqlExamPage'
import { TestPage as IsTestPage } from './subjects/is/pages/TestPage'
import { ExamPage as AppDevExamPage } from './subjects/appdev/pages/ExamPage'
import { ExamsPage as AppDevExamsPage } from './subjects/appdev/pages/ExamsPage'
import { Home as AppDevHome } from './subjects/appdev/pages/Home'
import { NotePage as AppDevNotePage } from './subjects/appdev/pages/NotePage'
import { NotesPage as AppDevNotesPage } from './subjects/appdev/pages/NotesPage'
import { TestPage as AppDevTestPage } from './subjects/appdev/pages/TestPage'
import { TestsPage as AppDevTestsPage } from './subjects/appdev/pages/TestsPage'
import { Shell } from './shell/Shell'
import { HubPage } from './shell/HubPage'


// EP Imports
import { ExamPrepIndex } from './subjects/ep/pages/ExamPrepIndex'
import { ExamPage as EpExamPage } from './subjects/ep/pages/ExamPage'
import { ResultsPage as EpResultsPage } from './subjects/ep/pages/ResultsPage'

const NotFound = () => (
  <div className="rounded-xl border border-line bg-surface p-10 text-center shadow-card">
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">404</p>
    <h1 className="mt-2 font-serif text-3xl">Page not found</h1>
    <p className="mt-2 text-sm text-muted">That route does not exist.</p>
    <Link
      to="/"
        className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
    >
      Back to all subjects
    </Link>
  </div>
)

const EpShell = () => (
  <div className="ep-quiz">
    <Outlet />
  </div>
)

const ChapterRoute = ({ Chapter }: { Chapter: ComponentType }) => {
  const { chapterId } = useParams()
  return <Chapter key={chapterId} />
}

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<HubPage />} />
        
        <Route path="adt">
          <Route index element={<AdtHome />} />
          <Route path="chapters" element={<AdtChaptersPage />} />
          <Route
            path="chapter/:chapterId"
            element={<ChapterRoute Chapter={AdtChapterPage} />}
          />
          <Route path="test/:chapterId" element={<AdtTestPage />} />
          <Route path="exams" element={<AdtExamsPage />} />
          <Route path="exam/:examId" element={<AdtExamPage />} />
          <Route path="results/:attemptId" element={<AdtResultsPage />} />
          <Route path="progress" element={<AdtProgressPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="is">
          <Route index element={<IsHome />} />
          <Route path="chapters" element={<IsChaptersPage />} />
          <Route
            path="chapter/:chapterId"
            element={<ChapterRoute Chapter={IsChapterPage} />}
          />
          <Route path="test/:chapterId" element={<IsTestPage />} />
          <Route path="exams" element={<IsExamsPage />} />
          <Route path="exam/:examId" element={<IsExamPage />} />
          <Route path="sql" element={<Navigate to="/is/chapter/sql-lab" replace />} />
          <Route path="sql/exam" element={<SqlExamPage />} />
          <Route path="results/:attemptId" element={<IsResultsPage />} />
          <Route path="progress" element={<IsProgressPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="pm/*" element={<PMApp />} />
        
        <Route path="app-dev">
          <Route index element={<AppDevHome />} />
          <Route path="notes" element={<AppDevNotesPage />} />
          <Route path="notes/:noteKey" element={<AppDevNotePage />} />
          <Route path="tests" element={<AppDevTestsPage />} />
          <Route path="test/:topicKey" element={<AppDevTestPage />} />
          <Route path="exams" element={<AppDevExamsPage />} />
          <Route path="exam/:examKey" element={<AppDevExamPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="study-system" element={<Navigate to="/app-dev" replace />} />
        
        <Route path="exam-prep" element={<EpShell />}>
          <Route index element={<ExamPrepIndex />} />
          <Route path="chapter/:chapterId" element={<ChapterRoute Chapter={EpExamPage} />} />
          <Route path="exam/:examId" element={<EpExamPage />} />
          <Route path="results/:attemptId" element={<EpResultsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)