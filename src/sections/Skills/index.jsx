import React, { useEffect, useRef, useState, useCallback } from 'react';
import './Skills.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';
import ParticlesBackground from '../../components/ParticlesBackground.jsx';

const SkillCard = ({ card, shouldReduceMotion, isExpanded, onToggle, index }) => {
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
    <div
      className={`skills-item${isExpanded ? ' expanded' : ''}${shouldReduceMotion ? ' no-motion' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-controls={`skill-panel-${index}`}
      onClick={onToggle}
      onKeyDown={handleKey}
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
        {isExpanded ? (
          <div className="skill-panel-content">
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
          </div>
        ) : (
          <div className="skill-panel-content">
            {Array.isArray(card.bullets) && card.bullets.length > 0 ? (
              <ul className="skills-card-bullets">
                {card.bullets.slice(0, 3).map((line, bulletIndex) => (
                  <li key={`${card.title}-${bulletIndex}`}>{line}</li>
                ))}
              </ul>
            ) : card.description ? (
              <p className="skill-description skill-description--truncate">{card.description}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t, translations } = useLanguage();
  const items = translations?.skills?.items ?? [];
  const shouldReduceMotion = usePrefersReducedMotion();
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

  const sectionRef = useRef(null);

  return (
    <section
      id="skills"
      className={`skills-section${shouldReduceMotion ? ' reduced-motion' : ''}`}
      ref={sectionRef}
    >
      {!shouldReduceMotion ? (
        <div className="section-particles" aria-hidden="true">
          <ParticlesBackground />
        </div>
      ) : null}
      <div className="skills-content">
        <h2 className="skills-title">{t('skills.title')}</h2>
        <p className="skills-text">{t('skills.description')}</p>

        <div className="skills-grid">
          {cards.map((card, index) => (
            <SkillCard
              key={card.title + index}
              card={card}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
