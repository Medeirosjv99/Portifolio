import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <SectionHeading index="03" eyebrow="Experiência" title="Onde construí minha experiência" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className={`timeline__item ${job.current ? 'is-current' : ''}`} data-reveal>
              <span className="timeline__dot" aria-hidden="true">
                <Icon name="briefcase" size={16} />
              </span>
              <article className="job-card">
                <header className="job-card__header">
                  <div>
                    <h3 className="job-card__company">{job.company}</h3>
                    <p className="job-card__role">{job.role}</p>
                  </div>
                  <span className={`badge ${job.current ? 'badge--accent' : ''}`}>{job.period}</span>
                </header>
                <p className="job-card__summary">{job.summary}</p>
                <ul className="check-list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Tecnologias">
                  {job.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
