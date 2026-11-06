import { useEffect, useState } from 'react'

const PROJECT_ROUTE = /^#\/projetos\/([\w-]+)\/?$/

// Roteamento por hash: funciona em qualquer hospedagem estática (GitHub Pages,
// Netlify, Vercel) sem configurar rewrites. Âncoras comuns (#sobre) continuam
// sendo âncoras da página inicial.
export function parseHash(hash) {
  const match = hash.match(PROJECT_ROUTE)
  if (match) return { page: 'project', slug: match[1], anchor: null }
  const anchor = hash.startsWith('#') && !hash.startsWith('#/') ? hash.slice(1) : null
  return { page: 'home', slug: null, anchor }
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}

export const projectHref = (slug) => `#/projetos/${slug}`
