import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { accentClasses, navItemActive, subjects, type SubjectMeta } from '../shell/subjects'
import { cn } from '../lib/cn'

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
  </svg>
)

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SideDrawer = ({ subject, pathname }: { subject?: SubjectMeta; pathname: string }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent/40 hover:text-accent-strong active:scale-95"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-b border-line bg-surface/95 shadow-card backdrop-blur-md"
        >
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Subjects
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {subjects.map((item) => {
                const accent = accentClasses[item.accent]
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

                return (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex min-h-12 items-center gap-2 rounded-lg border px-2.5 py-2 text-left transition-colors duration-200',
                      active ? cn(accent.soft, accent.border) : 'border-line bg-canvas',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold',
                        accent.tile,
                      )}
                    >
                      {item.code}
                    </span>
                    <span
                      className={cn(
                        'min-w-0 truncate text-sm font-medium',
                        active ? accent.text : 'text-ink',
                      )}
                    >
                      {item.short}
                    </span>
                  </NavLink>
                )
              })}
            </div>

            {subject ? (
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted">
                  {subject.code} sections
                </p>
                <nav className="mt-2 space-y-1" aria-label={`${subject.name} sections`}>
                  {subject.nav.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'flex min-h-11 items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200',
                        navItemActive(pathname, item)
                          ? 'bg-accent-soft text-accent-strong'
                          : 'text-muted hover:bg-canvas hover:text-ink',
                      )}
                    >
                      {item.label}
                      <ChevronIcon />
                    </NavLink>
                  ))}
                </nav>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}
