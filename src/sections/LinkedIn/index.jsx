import React from "react";
import { motion } from "framer-motion";
import "./LinkedIn.css";

export default function LinkedIn() {
  const posts = [
    {
      title: "Cómo construí mi primer portafolio profesional",
      link: "https://www.linkedin.com/",
      date: "Hace 2 semanas",
    },
    {
      title: "Reflexión: el poder de aprender construyendo 🚀",
      link: "https://www.linkedin.com/",
      date: "Hace 1 mes",
    },
    {
      title: "Proyecto final: Sistema POS con Spring Boot y PostgreSQL 💻",
      link: "https://www.linkedin.com/",
      date: "Hace 2 meses",
    },
  ];

  return (
  <section id="linkedin" className="linkedin-section">
      <div className="animated-bg"></div>

      <motion.div
        className="linkedin-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="linkedin-title">
          Publicaciones <span>de LinkedIn</span>
        </h2>
        <p className="linkedin-subtitle">
          Aquí comparto mis aprendizajes, proyectos y experiencias en tecnología.
        </p>

        <div className="linkedin-posts">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              className="linkedin-card"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{post.title}</h3>
              <p className="linkedin-date">{post.date}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
