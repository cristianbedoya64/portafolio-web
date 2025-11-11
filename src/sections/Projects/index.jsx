import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Projects.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Projects() {
  const { t } = useLanguage();
  const projectCards = t('projects.cards') || [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.6, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.04, y: -4 };

  return (
    <section id="projects" className="projects">
      <div className="animated-bg"></div>

      <motion.div
        className="projects-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">{t('projects.title')}</h2>
        <p className="projects-subtitle">{t('projects.subtitle')}</p>

        <div className="projects-grid">
          {projectCards.map((project, index) => (
            <motion.div
              key={project.title + index}
              className="project-card"
              whileHover={cardHover}
              transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                {project.action || ''}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
