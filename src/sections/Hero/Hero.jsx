import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useEffects } from '../../contexts/EffectsContext.jsx';
import useTilt from '../../hooks/useTilt.js';

export default function Hero() {
  const { t, language } = useLanguage();
  const { effectsEnabled } = useEffects();
  const shouldReduceMotion = useReducedMotion();

  // Photo loading state for progressive reveal
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [fallbackStep, setFallbackStep] = useState(0);
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '/');
  const srcAvif = `${base}profile.avif`;
  const srcWebp = `${base}profile.webp`;
  const srcJpg = `${base}profile.jpg`;
  const srcJfif = `${base}profile.jpg.jfif`;
  const [currentSrc, setCurrentSrc] = useState(srcAvif);

  const disableTilt = !effectsEnabled || shouldReduceMotion;
  const tiltRef = useTilt(
    {
      max: 10,
      glare: true,
      'max-glare': 0.15,
      scale: 1.03,
    },
    disableTilt,
  );

  const altText = useMemo(() => {
    const name = t('hero.name') || 'Perfil';
    return language === 'en' ? `${name} - Profile photo` : `${name} - Foto de perfil`;
  }, [language, t]);

  const initials = useMemo(() => {
    const name = (t('hero.name') || '').trim();
    if (!name) return 'CB';
    const parts = name.split(/\s+/).slice(0, 2);
    return parts
      .map((p) => p[0])
      .join('')
      .toUpperCase();
  }, [t]);

  // Animated text helpers
  const titlePrefix = t('hero.titlePrefix');
  const nameText = t('hero.name');
  const highlight = t('hero.highlight');
  const roles = useMemo(() => {
    const list = t('hero.roles');
    // t('hero.roles') may return array or fallback string
    if (Array.isArray(list) && list.length) return list;
    // access translations directly if needed
    const raw = t('hero.roles') || [];
    return Array.isArray(raw) && raw.length ? raw : [highlight];
  }, [t, highlight]);

  // Typewriter state for rotating roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0] || highlight);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const isTestEnv = import.meta.env.MODE === 'test' || Boolean(import.meta.env.VITEST);
    const enableTypewriter =
      effectsEnabled && !shouldReduceMotion && !isTestEnv && roles.length > 1;
    if (!enableTypewriter) {
      setDisplayText(roles[0] || highlight);
      return; // no animation
    }

    const full = roles[roleIndex];
    const currentLen = displayText.length;
    const TYPING = 55;
    const DELETING = 35;
    const PAUSE_FULL = 1100;
    const PAUSE_EMPTY = 260;
    let delay;
    if (!isDeleting && currentLen < full.length) {
      setDisplayText(full.slice(0, currentLen + 1));
      delay = TYPING;
    } else if (!isDeleting && currentLen === full.length) {
      delay = PAUSE_FULL;
      setIsDeleting(true);
    } else if (isDeleting && currentLen > 0) {
      setDisplayText(full.slice(0, currentLen - 1));
      delay = DELETING;
    } else if (isDeleting && currentLen === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      delay = PAUSE_EMPTY;
    }
    timerRef.current = setTimeout(() => {}, delay);
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [displayText, isDeleting, roleIndex, roles, effectsEnabled, shouldReduceMotion, highlight]);

  const nameChars = useMemo(() => Array.from(nameText || ''), [nameText]);

  const letterVariants =
    shouldReduceMotion || !effectsEnabled
      ? undefined
      : {
          hidden: { y: 16, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
  const nameContainer =
    shouldReduceMotion || !effectsEnabled
      ? undefined
      : {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.035, delayChildren: 0.15 },
          },
        };

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
        <div className="hero-photo-area" aria-hidden={false}>
          <div className="hero-photo-glow" />
          <div className="hero-photo-ring" />
          <motion.div
            className="hero-photo"
            ref={tiltRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={imgLoaded ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {!imgError ? (
              <img
                src={currentSrc}
                alt={altText}
                className={imgLoaded ? 'hero-photo-img' : 'hero-photo-img is-loading'}
                width="192"
                height="192"
                decoding="async"
                fetchpriority="high"
                onLoad={() => setImgLoaded(true)}
                onError={() => {
                  if (fallbackStep === 0) {
                    setFallbackStep(1);
                    setCurrentSrc(srcWebp);
                  } else if (fallbackStep === 1) {
                    setFallbackStep(2);
                    setCurrentSrc(srcJpg);
                  } else if (fallbackStep === 2) {
                    setFallbackStep(3);
                    setCurrentSrc(srcJfif);
                  } else {
                    setImgError(true);
                  }
                }}
              />
            ) : (
              <div className="hero-photo-fallback" aria-label={altText} role="img">
                <span>{initials}</span>
              </div>
            )}
          </motion.div>
        </div>
        <h1 className="hero-title">
          {titlePrefix}{' '}
          <motion.span
            className={
              effectsEnabled
                ? 'hero-name hero-name-plain hero-name-marker-animated'
                : 'hero-name hero-name-plain'
            }
            variants={nameContainer}
            initial={nameContainer ? 'hidden' : undefined}
            animate={nameContainer ? 'visible' : undefined}
            role="text"
          >
            {nameChars.map((ch, idx) => (
              <motion.span
                key={`ch-${idx}-${ch}`}
                className="char"
                variants={letterVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                aria-hidden="true"
              >
                {ch}
              </motion.span>
            ))}
            {/* Accessible fallback text ensures screen readers read the name normally */}
            <span className="sr-only">{nameText}</span>
          </motion.span>
        </h1>
        <h2
          className={
            effectsEnabled
              ? 'hero-highlight hero-highlight-animated hero-typewriter'
              : 'hero-highlight'
          }
        >
          {effectsEnabled && !shouldReduceMotion && roles.length > 1 ? (
            <>
              <span className="typewriter-text" aria-live="polite">
                {displayText}
              </span>
              <span className="typewriter-caret" aria-hidden="true">
                |
              </span>
            </>
          ) : (
            highlight
          )}
        </h2>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <div className="hero-actions">
          <motion.a
            className="hero-btn"
            href="#projects"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            {t('hero.cta')}
          </motion.a>
          <motion.a
            className="hero-btn hero-btn--secondary"
            href="https://github.com/cristianbedoya64/portafolio-web"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            {t('hero.repoCta')}
          </motion.a>
        </div>
        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll">
          <span className="hsi-mouse" aria-hidden="true"></span>
          <span className="hsi-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
