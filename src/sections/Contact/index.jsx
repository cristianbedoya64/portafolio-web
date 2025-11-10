/* eslint-disable no-unused-vars -- 'motion' is used in JSX elements below */
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
  <section id="contact" className="contact">
      <div className="animated-bg"></div>

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="contact-title">
          ¡Conectemos y creemos algo <span>increíble</span> juntos!
        </h2>
        <p className="contact-subtitle">
          Estoy disponible para colaborar en proyectos, desarrollar ideas o simplemente conversar sobre tecnología.
        </p>

        <div className="contact-buttons">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn linkedin"
            aria-label="Abrir mi perfil de LinkedIn en nueva pestaña"
            whileHover={{ scale: 1.08 }}
          >
            <FaLinkedin className="icon" /> LinkedIn
          </motion.a>

          <motion.a
            href="mailto:tucorreo@example.com"
            className="contact-btn btn email"
            aria-label="Enviar correo electrónico"
            whileHover={{ scale: 1.08 }}
          >
            <FaEnvelope className="icon" /> Correo
          </motion.a>

          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn github"
            aria-label="Abrir mi perfil de GitHub en nueva pestaña"
            whileHover={{ scale: 1.08 }}
          >
            <FaGithub className="icon" /> GitHub
          </motion.a>

          <motion.a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn whatsapp"
            aria-label="Abrir chat de WhatsApp en nueva pestaña"
            whileHover={{ scale: 1.08 }}
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
