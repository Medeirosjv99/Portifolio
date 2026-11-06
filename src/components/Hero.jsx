import Icon from './Icon.jsx'
import { profile, socials } from '../data/profile.js'

const codeLines = [
  [['k', 'const'], ['p', ' '], ['v', 'joao'], ['p', ' = {']],
  [['p', '  cargo: '], ['s', "'Full Stack'"], ['p', ',']],
  [['p', '  empresa: '], ['s', "'Vexur'"], ['p', ',']],
  [['p', '  stack: ['], ['s', "'Vue'"], ['p', ', '], ['s', "'Node'"], ['p', ', '], ['s', "'Neo4j'"], ['p', '],']],
  [['p', '  foco: '], ['s', "'resolver problemas'"], ['p', ',']],
  [['p', '}']],
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker" data-reveal>
            <span className="status-dot" aria-hidden="true" />
            {profile.role} na Vexur
          </p>
          <h1 className="hero__title" data-reveal>
            {profile.name}
          </h1>
          <p className="hero__role" data-reveal>
            <strong>{profile.role}</strong>
            <span className="hero__stack">{profile.headline}</span>
          </p>
          <p className="hero__tagline" data-reveal>
            {profile.tagline}
          </p>
          <p className="hero__pitch" data-reveal>
            {profile.pitch}
          </p>

          <div className="hero__actions" data-reveal>
            <a href="#projetos" className="btn btn--primary">
              Ver projetos <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contato" className="btn btn--ghost">
              Entre em contato
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn btn--ghost" download>
                <Icon name="download" size={18} /> Currículo
              </a>
            )}
          </div>

          <ul className="hero__socials" data-reveal aria-label="Redes sociais">
            {socials.slice(0, 3).map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon name={social.icon} size={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="portrait">
            <div className="portrait__ring" aria-hidden="true" />
            <img
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width="800"
              height="800"
              fetchPriority="high"
              className="portrait__img"
            />
          </div>
          <figure className="code-card" aria-hidden="true">
            <div className="code-card__bar">
              <span />
              <span />
              <span />
              <em>joao.js</em>
            </div>
            <pre>
              <code>
                {codeLines.map((line, i) => (
                  <span key={i} className="code-line">
                    {line.map(([type, text], j) => (
                      <span key={j} className={`tok-${type}`}>
                        {text}
                      </span>
                    ))}
                  </span>
                ))}
              </code>
            </pre>
          </figure>
        </div>
      </div>

      <div className="container">
        <dl className="stats" data-reveal>
          {profile.stats.map((stat) => (
            <div className="stats__item" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
