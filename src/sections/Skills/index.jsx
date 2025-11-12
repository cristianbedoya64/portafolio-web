import React, { lazy, Suspense, useEffect, useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import './Skills.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import useTilt from '../../hooks/useTilt.js';
import { useEffects } from '../../contexts/EffectsContext.jsx';

const ParticlesBackground = lazy(() => import('../../components/ParticlesBackground.jsx'));

const TILT_OPTIONS = {
  max: 14,
  scale: 1.04,
  speed: 600,
  glare: true,
  'max-glare': 0.18,
};

const SkillCard = ({
  card,
  shouldReduceMotion,
  effectsEnabled,
  cardHover,
  isExpanded,
  onToggle,
  index,
}) => {
  const tiltRef = useTilt(TILT_OPTIONS, shouldReduceMotion || !effectsEnabled);
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  return (
    <motion.div
      ref={tiltRef}
      className={`skills-item${isExpanded ? ' expanded' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`skill-panel-${index}`}
      onClick={onToggle}
      onKeyDown={handleKey}
      whileHover={cardHover}
      transition={
        shouldReduceMotion ? { duration: 0.25 } : { type: 'spring', stiffness: 200, damping: 16 }
      }
      layout
    >
      <div className="skills-item-header">
        {card.icon ? (
          <span className="skills-item-icon" aria-hidden="true">
            {card.icon}
          </span>
        ) : null}
        <h4>{card.title}</h4>
        {card.level && (
          <span className="skill-level" aria-label={`Nivel ${card.level}`}>
            {card.level}
          </span>
        )}
      </div>
      <div id={`skill-panel-${index}`} className="skill-panel" aria-hidden={!isExpanded}>
        <AnimatePresence initial={false} mode="wait">
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="skill-panel-content"
            >
              {card.description && <p className="skill-description">{card.description}</p>}
              {Array.isArray(card.bullets) && card.bullets.length > 0 && (
                <ul className="skills-card-bullets">
                  {card.bullets.map((line, bulletIndex) => (
                    <li key={`${card.title}-${bulletIndex}`}>{line}</li>
                  ))}
                </ul>
              )}
              {Array.isArray(card.keywords) && card.keywords.length > 0 && (
                <div className="skill-chips" role="list">
                  {card.keywords.map((kw, i) => (
                    <span key={`${card.title}-kw-${i}`} className="skill-chip" role="listitem">
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="skill-panel-content"
            >
              {Array.isArray(card.bullets) && card.bullets.length > 0 ? (
                <ul className="skills-card-bullets">
                  {card.bullets.slice(0, 3).map((line, bulletIndex) => (
                    <li key={`${card.title}-${bulletIndex}`}>{line}</li>
                  ))}
                </ul>
              ) : card.description ? (
                <p className="skill-description skill-description--truncate">{card.description}</p>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t, translations } = useLanguage();
  const items = translations?.skills?.items ?? [];
  const shouldReduceMotion = useReducedMotion();
  const { effectsEnabled } = useEffects();
  const [expandedIndex, setExpandedIndex] = useState(() => {
    try {
      const v = sessionStorage.getItem('skillsExpandedIndex');
      return v !== null ? Number(v) : null;
    } catch {
      return null;
    }
  });
  const toggleIndex = useCallback((i) => setExpandedIndex((prev) => (prev === i ? null : i)), []);

  // Transformar items de skills al mismo shape visual que About.cards
  const cards = items.map((it, idx) => ({
    title: it?.name ?? `Skill ${idx + 1}`,
    bullets: Array.isArray(it?.keywords) ? it.keywords : [],
    keywords: Array.isArray(it?.keywords) ? it.keywords : [],
    description: it?.description ?? '',
    level: it?.level || undefined,
    icon: undefined, // About soporta icon opcional; omitimos para evitar dependencias
  }));

  // Persist selection in sessionStorage
  useEffect(() => {
    try {
      if (expandedIndex === null || Number.isNaN(expandedIndex)) {
        sessionStorage.removeItem('skillsExpandedIndex');
      } else {
        sessionStorage.setItem('skillsExpandedIndex', String(expandedIndex));
      }
    } catch {
      // ignore
    }
  }, [expandedIndex]);

  // Guard against out-of-range after language/content changes
  useEffect(() => {
    if (expandedIndex != null && (expandedIndex < 0 || expandedIndex >= cards.length)) {
      setExpandedIndex(null);
    }
  }, [cards.length, expandedIndex]);

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 48 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 0.8, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.04 };

  const sectionRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return; // no cargar partículas si reduce-motion
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowParticles(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.01 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <motion.div
        className="skills-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="skills-title">{t('skills.title')}</h2>
        <p className="skills-text">{t('skills.description')}</p>

        <motion.div className="skills-grid" layout>
          <AnimatePresence initial={false}>
            {cards.map((card, index) => (
              <SkillCard
                key={card.title + index}
                card={card}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
                effectsEnabled={effectsEnabled}
                cardHover={cardHover}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleIndex(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {!shouldReduceMotion && effectsEnabled && showParticles ? (
        <Suspense
          fallback={
            <div className="particles-fallback" aria-hidden="true">
              <div className="pf-spin" />
              <div className="pf-glow" />
            </div>
          }
        >
          <ParticlesBackground />
        </Suspense>
      ) : null}
    </section>
  );
};

export default Skills;
