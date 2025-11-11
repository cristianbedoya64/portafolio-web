import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './About.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

const About = () => {
  const { t, translations } = useLanguage();
  const cards = translations?.about?.cards ?? [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 48 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 0.8, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.04 };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="about-title">{t('about.title')}</h2>
        <p className="about-text">{t('about.intro')}</p>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.title + index}
              className="about-item"
              whileHover={cardHover}
              transition={
                shouldReduceMotion ? { duration: 0.2 } : { type: 'spring', stiffness: 200 }
              }
            >
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
