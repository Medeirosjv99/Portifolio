import { useEffect } from 'react'
import Icon from './Icon.jsx'
import ProjectCover from './ProjectCover.jsx'
import { profile, projects } from '../data/profile.js'
import { projectHref } from '../hooks/useHashRoute.js'

export default function ProjectPage({ slug }) {
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    document.title = project
      ? `${project.title} | ${profile.name}`
      : `Projeto não encontrado | ${profile.name}`
  }, [project])

  if (!project) {
    return (
      <main id="conteudo" className="project-page">
        <div className="container project-page__empty">
          <h1>Projeto não encontrado</h1>
          <p>O link pode estar desatualizado.</p>
          <a href="#projetos" className="btn btn--primary">
            <Icon name="arrowLeft" size={18} /> Ver todos os projetos
          </a>
        </div>
      </main>
    )
  }

  const { links } = project

  return (
    <main id="conteudo" className="project-page">
      <div className="container">
        <a href="#projetos" className="back-link">
          <Icon name="arrowLeft" size={18} /> Voltar para projetos
        </a>

        <header className="project-hero" data-reveal>
          <div className="project-card__meta">
            {project.featured && <span className="badge badge--accent">Projeto em destaque</span>}
            <span className="badge">{project.status}</span>
          </div>
          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__subtitle">{project.subtitle}</p>
          <div className="project-hero__actions">
            {links.repo && (
              <a href={links.repo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <Icon name="github" size={18} /> Ver código
              </a>
            )}
            {links.demo && (
              <a href={links.demo} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <Icon name="arrowUpRight" size={18} /> Demonstração
              </a>
            )}
            {!links.repo && !links.demo && project.linkNote && (
              <p className="note">
                <Icon name="lock" size={16} /> {project.linkNote}
              </p>
            )}
          </div>
        </header>

        <div className="project-cover-frame" data-reveal>
          <ProjectCover project={project} eager />
        </div>

        <div className="project-layout">
          <div className="project-main">
            <section className="project-block" data-reveal>
              <h2>Visão geral</h2>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>

            <section className="project-block" data-reveal>
              <h2>Funcionalidades</h2>
              <ul className="check-list check-list--grid">
                {project.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.challenges.length > 0 && (
              <section className="project-block" data-reveal>
                <h2>Desafios técnicos</h2>
                <div className="challenge-list">
                  {project.challenges.map((challenge) => (
                    <article key={challenge.title} className="challenge">
                      <h3>{challenge.title}</h3>
                      <p>{challenge.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="project-aside" data-reveal>
            <h2>Tecnologias</h2>
            <ul className="tags">
              {project.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
            <a href="#contato" className="btn btn--ghost btn--block">
              Conversar sobre este projeto
            </a>
          </aside>
        </div>

        {next && next.slug !== project.slug && (
          <a href={projectHref(next.slug)} className="next-project" data-reveal>
            <span className="next-project__label">Próximo projeto</span>
            <span className="next-project__title">
              {next.title} <Icon name="arrowRight" size={22} />
            </span>
          </a>
        )}
      </div>
    </main>
  )
}
