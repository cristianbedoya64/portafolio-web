import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './AI.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function AI() {
  const { t } = useLanguage();
  const experiments = t('ai.experiments') || [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.03 };
  const cardTap = shouldReduceMotion ? undefined : { scale: 0.97 };

  return (
    <section id="ai" className="ai-showcase">
      <div className="animated-bg"></div>

      <motion.div
        className="ai-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="ai-title">
          {t('ai.title')}
          {t('ai.highlight') && (
            <>
              {' '}
              <span>{t('ai.highlight')}</span>
            </>
          )}
        </h2>
        <p className="ai-subtitle">{t('ai.subtitle')}</p>

        <div className="ai-grid">
          {experiments.map((exp, index) => (
            <motion.a
              key={index}
              href={exp.link || '#'}
              className="ai-card"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={cardHover}
              whileTap={cardTap}
              aria-label={exp?.title ? `Abrir experimento: ${exp.title}` : 'Abrir experimento'}
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
