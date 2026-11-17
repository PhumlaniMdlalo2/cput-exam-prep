import { useState } from 'react'
import { Link } from 'react-router-dom'
import { subjects, accentClasses } from '../shell/subjects'
import { cn } from '../lib/cn'

export const SideDrawer = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      {/* Drawer toggle button (visible on mobile) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        className="md:hidden fixed top-4 left-4 z-30 rounded-full bg-surface p-2 shadow-card border border-line"
      >
        {open ? '✕' : '☰'}
      </button>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={toggle}
        />
      )}
      {/* Drawer panel */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 max-w-full transform bg-surface shadow-card transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!open}
      >
        <nav className="h-full flex flex-col p-4">
          <h2 className="mb-4 text-xl font-bold text-ink">Subjects</h2>
          <ul className="flex-1 space-y-2 overflow-y-auto">
            {subjects.map((subject) => {
              const accent = accentClasses[subject.accent]
              return (
                <li key={subject.id}>
                  <Link
                    to={subject.href}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-sm font-medium',
                      accent.text,
                      'hover:bg-canvas/40',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {subject.short}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  )
}

