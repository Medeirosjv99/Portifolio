import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { navLinks, profile } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

// 'inicio' entra na lista só para limpar o destaque quando o topo está visível.
const sectionIds = ['inicio', ...navLinks.map((link) => link.id)]

export default function Header({ theme, onToggleTheme, isHome }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds, isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 900 && setOpen(false)
    document.body.classList.add('no-scroll')
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)
  const isLight = theme === 'light'

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <a href="#inicio" className="brand" onClick={close} aria-label={`${profile.name}, ir para o início`}>
          <span className="brand__mark">{profile.initials}</span>
          <span className="brand__name">{profile.shortName}</span>
        </a>

        <nav id="menu" className="nav" aria-label="Seções">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link ${active === link.id ? 'is-active' : ''}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Ativar tema escuro' : 'Ativar tema claro'}
            title={isLight ? 'Tema escuro' : 'Tema claro'}
          >
            <Icon name={isLight ? 'moon' : 'sun'} size={18} />
          </button>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
