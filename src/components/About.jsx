import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { about, profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow="Sobre mim" title="Minha trajetória profissional" />
        <div className="about">
          <div className="about__text" data-reveal>
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? 'about__lead' : undefined}>
                {paragraph}
              </p>
            ))}
            <p className="about__meta">
              <Icon name="pin" size={16} /> {profile.location}
            </p>
          </div>
          <ul className="focus-list">
            {about.focus.map((item) => (
              <li key={item.title} className="focus-card" data-reveal>
                <span className="focus-card__icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
