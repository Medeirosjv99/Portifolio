import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { certificatesUrl, education } from '../data/profile.js'

export default function Education() {
  return (
    <section id="formacao" className="section">
      <div className="container">
        <SectionHeading index="06" eyebrow="Formação" title="Minha formação" />
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.course} className="edu-card" data-reveal>
              <span className="edu-card__icon">
                <Icon name="book" size={22} />
              </span>
              <div>
                <span className="badge">{item.period}</span>
                <h3>{item.course}</h3>
                <p className="edu-card__institution">{item.institution}</p>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
          <a
            href={certificatesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="edu-card edu-card--link"
            data-reveal
          >
            <span className="edu-card__icon">
              <Icon name="award" size={22} />
            </span>
            <div>
              <h3>Certificados</h3>
              <p>Cursos e certificações complementares reunidos no meu GitHub.</p>
              <span className="text-link">
                Ver certificados <Icon name="arrowUpRight" size={16} />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
