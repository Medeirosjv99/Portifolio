
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Tela Cópia Instagram",
      desc: "Feito com HTML e CSS, esse foi um dos meus primeiros projetos.",
      image: "img/WhatsApp Image 2025-05-27 at 00.32.20.jpeg",
      link: "#"
    },
    {
      title: "Projeto 2",
      desc: "Descrição do Projeto 2.",
      image: "img/projeto2.jpg",
      link: "#"
    },
    {
      title: "Projeto 3",
      desc: "Descrição do Projeto 3.",
      image: "img/projeto3.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects-container">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <article className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} className="btn">Ver Projeto</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
