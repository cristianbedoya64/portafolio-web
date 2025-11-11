import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const containerAnimate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.6, ease: 'linear' }
    : { duration: 1.2, ease: 'easeOut' };
  const hoverScale = shouldReduceMotion ? undefined : { scale: 1.06 };
  const tapScale = shouldReduceMotion ? undefined : { scale: 0.97 };

  return (
    <section id="home" className="hero">
      <div className="animated-bg"></div>

      <motion.div
        className="hero-content"
        initial={containerInitial}
        animate={containerAnimate}
        transition={containerTransition}
      >
        <h1 className="hero-title">
          {t('hero.titlePrefix')} <span>{t('hero.name')}</span>
        </h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <motion.a className="hero-btn" href="#projects" whileHover={hoverScale} whileTap={tapScale}>
          {t('hero.cta')}
        </motion.a>
      </motion.div>
    </section>
  );
}
