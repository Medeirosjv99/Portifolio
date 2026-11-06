import Icon from './Icon.jsx'
import ProjectCover from './ProjectCover.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/profile.js'
import { projectHref } from '../hooks/useHashRoute.js'

function ProjectCard({ project, large = false }) {
  return (
    <article className={`project-card ${large ? 'project-card--large' : ''}`} data-reveal>
      <a href={projectHref(project.slug)} className="project-card__cover" tabIndex={-1} aria-hidden="true">
        <ProjectCover project={project} />
      </a>
      <div className="project-card__body">
        <div className="project-card__meta">
          {large && <span className="badge badge--accent">Projeto em destaque</span>}
          <span className="badge">{project.status}</span>
        </div>
        <h3 className="project-card__title">
          <a href={projectHref(project.slug)}>{project.title}</a>
        </h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="tags" aria-label="Tecnologias">
          {project.stack.slice(0, large ? 9 : 5).map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-card__actions">
          <a href={projectHref(project.slug)} className="btn btn--primary btn--sm">
            Ver detalhes <Icon name="arrowRight" size={16} />
          </a>
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
              <Icon name="github" size={16} /> Código
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm">
              <Icon name="arrowUpRight" size={16} /> Demonstração
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [highlight, ...featured] = projects.filter((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="section section--alt">
      <div className="container">
        <SectionHeading index="05" eyebrow="Projetos" title="Projetos em destaque">
          Projetos que mostram como resolvo problemas reais: regras de negócio, dados e interfaces.
        </SectionHeading>

        {highlight && <ProjectCard project={highlight} large />}

        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="secondary-projects" data-reveal>
            <h3 className="secondary-projects__title">Primeiros projetos e estudos</h3>
            <ul className="secondary-list">
              {secondary.map((project) => (
                <li key={project.slug}>
                  <a href={projectHref(project.slug)} className="secondary-item">
                    <span className="secondary-item__thumb">
                      <ProjectCover project={project} />
                    </span>
                    <span className="secondary-item__text">
                      <strong>{project.title}</strong>
                      <span>{project.summary}</span>
                    </span>
                    <Icon name="arrowRight" size={18} className="secondary-item__arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
