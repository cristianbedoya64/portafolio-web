import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="animated-bg"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="hero-title">Hola, soy <span>Tu Nombre</span></h1>
        <p className="hero-subtitle">
          Desarrollador de Software | Innovador Digital | Soñador Tecnológico
        </p>

        <motion.button
          className="hero-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Portafolio
        </motion.button>
      </motion.div>
    </section>
  );
}
