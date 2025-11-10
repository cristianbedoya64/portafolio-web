import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión",
      description: "Aplicación web para administrar clientes, ventas y reportes.",
      link: "#",
    },
    {
      title: "App de Tareas",
      description: "Aplicación con React y Node.js para organizar tareas diarias.",
      link: "#",
    },
    {
      title: "Portafolio IA",
      description: "Integración de IA para generación de contenido creativo.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="animated-bg"></div>

      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">Proyectos Destacados</h2>
        <p className="projects-subtitle">
          Algunos de los proyectos que reflejan mi experiencia y pasión por la tecnología:
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
