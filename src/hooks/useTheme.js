import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

function readInitialTheme() {
  // index.html já aplica o tema antes do React carregar (evita "piscar").
  const fromDom = document.documentElement.dataset.theme
  if (fromDom === 'light' || fromDom === 'dark') return fromDom
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f6f4f1' : '#0d0e10')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Armazenamento bloqueado (aba anônima etc.): o tema só não é lembrado.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
