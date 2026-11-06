import { useEffect } from 'react'

// Anima a entrada dos elementos com [data-reveal] quando aparecem na tela.
// O CSS só esconde esses elementos se o JS estiver ativo (classe .js no <html>)
// e respeita prefers-reduced-motion.
export function useReveal(dependency) {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dependency])
}
