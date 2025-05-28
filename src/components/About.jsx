import React from "react";

function About() {
  return (
    <>
      <header>
        <h1 id="name">João Vitor de Medeiros</h1>
        <p id="title">
          <span className="highlight">Pouco sobre mim!</span>
        </p>
      </header>

      <section>
        <p className="description">
          Desenvolvedor FullStack na Vexur, estudante de Tecnologia para Sistemas de Internet no Instituto Federal do Paraná.
          Comecei na informática como técnico aos 17 anos, com 4 anos de experiência técnica que despertaram meu interesse por programação.
        </p>
        <p className="description">
          Atualmente trabalho como desenvolvedor FullStack na Vexur, onde adquiro experiência prática e aprendizado constante.
        </p>
      </section>

      <section className="skills-box">
        <h3 className="skills-title">Meus Conhecimentos</h3>
        <ul className="skills-list">
          {[
            "HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Node.js", "Express.js",
            "React", "Vue.js", "MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Linux",
            "NPM", "Sequelize", "Neo4j",
          ].map((tech) => (
            <li key={tech}>
              <i className={`devicon-${tech.toLowerCase().replace(/\./g, '').replace(/\s/g, '')}-plain colored`}></i>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;