export type Theme = 'light' | 'dark'

const THEME_KEY = 'cput-exam-theme'

export const getTheme = (): Theme => {
  try {
    const stored = window.localStorage.getItem(THEME_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Fall through to the default light theme.
  }
  return 'light'
}

export const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export const saveTheme = (theme: Theme): void => {
  try {
    window.localStorage.setItem(THEME_KEY, theme)
  } catch {
    // Storage can be unavailable; the in-memory theme still works.
  }
}
