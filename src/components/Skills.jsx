import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Tecnologias" title="Ferramentas que utilizo">
          Organizadas por área. As marcadas com <span className="daily-dot" aria-hidden="true" /> fazem parte do
          meu dia a dia.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group" data-reveal>
              <h3 className="skill-group__title">
                <Icon name={group.icon} size={18} />
                {group.title}
              </h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill.name} className={`skill ${skill.daily ? 'is-daily' : ''}`}>
                    {skill.icon ? (
                      <i className={`${skill.icon} skill__icon ${skill.mono ? 'is-mono' : ''}`} aria-hidden="true" />
                    ) : (
                      <Icon name={skill.iconName} size={18} className="skill__icon" />
                    )}
                    <span>{skill.name}</span>
                    {skill.daily && <span className="visually-hidden"> (uso diário)</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
