import { useEffect, useState } from 'react'

// Retorna o id da seção que está no meio da tela, para destacar o link no menu.
export function useActiveSection(ids, enabled) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, enabled])

  return enabled ? active : ''
}
