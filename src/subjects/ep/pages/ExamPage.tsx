import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { chapterById } from '../content'
import '../lib/quiz-engine.scoped.css'

declare global {
  interface Window {
    QUIZ_TOPICS: Record<string, { title: string; questions: any[] }>
    STUDY_META: Record<string, any>
  }
}

export const ExamPage = () => {
  const { chapterId } = useParams()
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    // Set up global variables for quiz engine
    const chapter = chapterId
      ? chapterById[chapterId as keyof typeof chapterById]
      : undefined
    window.QUIZ_TOPICS = {}
    window.STUDY_META = {}

    if (chapter && chapterId) {
      window.QUIZ_TOPICS[chapterId] = {
        title: chapter.title,
        questions: chapter.tests.find(t => t.chapterId === chapter.id)?.questions || []
      }
      window.STUDY_META[chapterId] = {
        examWeight: chapter.examWeight,
        sections: chapter.sections.length,
        keyTerms: chapter.keyTerms.length
      }
    }
    
    // Initialize quiz engine
    const script = document.createElement('script')
    script.src = '/assets/quiz-engine.js'
    script.onload = () => {
      // Trigger quiz initialization
      setTimeout(() => {
        const event = new Event('DOMContentLoaded')
        document.dispatchEvent(event)
      }, 100)
    }
    document.head.appendChild(script)
    
    // Cleanup
    return () => {
      const script = document.querySelector('script[src$="quiz-engine.js"]')
      if (script) script.remove()
    }
  }, [chapterId])
  
  return (
    <div ref={containerRef} className="exam-container">
      <div id="app"></div>
    </div>
  )
}