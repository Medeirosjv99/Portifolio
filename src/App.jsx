import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/profile.js'
import { useHashRoute } from './hooks/useHashRoute.js'
import { useReveal } from './hooks/useReveal.js'
import { useTheme } from './hooks/useTheme.js'

const HOME_TITLE = `${profile.name} | ${profile.role}`

function skipToContent(event) {
  // Evita trocar o hash (o que mudaria de rota na página de projeto).
  event.preventDefault()
  const main = document.getElementById('conteudo')
  main?.focus()
  main?.scrollIntoView()
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const route = useHashRoute()
  const isHome = route.page === 'home'
  const routeKey = isHome ? 'home' : route.slug

  useReveal(routeKey)

  useEffect(() => {
    if (isHome) {
      document.title = HOME_TITLE
      // Ao voltar de uma página de projeto, o navegador tenta pular para a
      // âncora antes de a home existir; refazemos o scroll após renderizar.
      const target = route.anchor && document.getElementById(route.anchor)
      if (target) target.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [isHome, route.anchor, routeKey])

  return (
    <>
      <a href="#conteudo" className="skip-link" onClick={skipToContent}>
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} isHome={isHome} />
      {isHome ? (
        <main id="conteudo" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      ) : (
        <ProjectPage key={route.slug} slug={route.slug} />
      )}
      <Footer />
    </>
  )
}
