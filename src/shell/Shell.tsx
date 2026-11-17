import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { applyTheme, getTheme, saveTheme } from './theme'
import { cn } from '../lib/cn'
import { navItemActive, subjectForPath } from './subjects'
import { SideDrawer } from '../components/SideDrawer'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 14.5A8 8 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" strokeLinejoin="round" />
  </svg>
)

export const Shell = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getTheme())
  const location = useLocation()
  const subject = subjectForPath(location.pathname)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    saveTheme(next)
  }

  return (
    <div className="grain flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <NavLink to={subject ? subject.href : '/'} className="group flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent font-serif text-lg font-semibold text-canvas shadow-card transition-transform duration-300 ease-spring group-hover:-rotate-3">
              {subject ? subject.code : 'EP'}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-serif text-lg font-medium text-ink">
                {subject ? subject.name : 'Exam Prep'}
              </span>
              <span className="hidden text-[0.68rem] uppercase tracking-[0.18em] text-muted sm:block">
                {subject ? `Exam prep · ${subject.range}` : 'CPUT · Third year'}
              </span>
            </span>
          </NavLink>
          <div className="ml-auto flex items-center gap-2">
            <nav className="hidden items-center gap-1 lg:flex">
              {subject?.nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={() =>
                    cn(
                      'flex min-h-11 items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                      navItemActive(location.pathname, item)
                        ? 'bg-accent-soft text-accent-strong'
                        : 'text-muted hover:bg-surface hover:text-ink',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong active:scale-95"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <SideDrawer subject={subject} pathname={location.pathname} />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-line bg-surface/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            {subject
              ? `Built from your ${subject.name} notes, ${subject.range}.`
              : 'Built for CPUT third year — Applications Development Theory, Information Systems and Project Management.'}
          </p>
          <p>Progress is saved in this browser only.</p>
        </div>
      </footer>
    </div>
  )
}
