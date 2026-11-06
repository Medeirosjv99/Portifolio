import Icon from './Icon.jsx'
import { profile, socials } from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <a href="#inicio" className="brand">
            <span className="brand__mark">{profile.initials}</span>
            <span className="brand__name">{profile.name}</span>
          </a>
          <p className="site-footer__note">
            © {year} · Feito com React, Vite e CSS puro.
          </p>
        </div>
        <ul className="site-footer__socials" aria-label="Redes sociais">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
                title={social.label}
              >
                <Icon name={social.icon} size={18} />
              </a>
            </li>
          ))}
          <li>
            <a href="#inicio" className="social-link" aria-label="Voltar ao topo" title="Voltar ao topo">
              <Icon name="arrowUp" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
