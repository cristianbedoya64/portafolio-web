/* eslint-disable no-unused-vars -- 'motion' is used in JSX elements below */
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
  <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-text">
          Soy un desarrollador apasionado por crear experiencias digitales con propósito.
          Me encanta aprender nuevas tecnologías y construir proyectos que inspiren a otros.
          Busco siempre la combinación entre diseño, funcionalidad y experiencia de usuario.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>🎯 Enfoque</h4>
            <p>Desarrollo frontend y backend con visión centrada en el usuario.</p>
          </motion.div>

          <motion.div
            className="about-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>🧠 Tecnologías favoritas</h4>
            <p>React, Node.js, PostgreSQL y herramientas de IA.</p>
          </motion.div>

          <motion.div
            className="about-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>💡 Filosofía</h4>
            <p>“El código es arte cuando mejora la vida de las personas.”</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
