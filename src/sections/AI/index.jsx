/* eslint-disable no-unused-vars -- 'motion' is used in JSX elements below */
import React from "react";
import { motion } from "framer-motion";
import "./AI.css";

export default function AI() {
  const experiments = [
    {
      title: "Asistente IA Personalizado",
      description: "Un chatbot con GPT-4 que responde con base en mi portafolio y estilo de comunicación.",
      tech: "React + OpenAI API",
      link: "https://www.linkedin.com/",
    },
    {
      title: "Generador de Imágenes",
      description: "Proyecto que usa Stable Diffusion para crear imágenes basadas en descripciones.",
      tech: "Python + Diffusers",
      link: "https://www.linkedin.com/",
    },
    {
      title: "Analizador de Sentimientos",
      description: "Sistema que analiza opiniones en redes sociales con NLP y Machine Learning.",
      tech: "Flask + Transformers",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <section id="ai" className="ai-showcase">
      <div className="animated-bg"></div>

      <motion.div
        className="ai-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="ai-title">
          Experimentos con <span>Inteligencia Artificial</span>
        </h2>
        <p className="ai-subtitle">
          Aquí comparto mis proyectos experimentales con IA, desde asistentes hasta modelos generativos.
        </p>

        <div className="ai-grid">
          {experiments.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link}
              className="ai-card"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{exp.title}</h3>
              <p className="ai-description">{exp.description}</p>
              <p className="ai-tech">{exp.tech}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
