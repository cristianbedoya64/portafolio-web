import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useEffects } from '../../contexts/EffectsContext.jsx';

const TYPEWRITER_CONFIG = {
  TYPE_SPEED: 160, // slower typing for readability
  DELETE_SPEED: 90,
  HOLD_FULL: 6000, // keep each role fully visible ~6s
  HOLD_EMPTY: 1200, // pause before typing the next role
};

export default function Hero() {
  const { t, language } = useLanguage();
  const { effectsEnabled } = useEffects();
  const shouldReduceMotion = useReducedMotion();

  // Foto de perfil – usar <picture> con AVIF + WebP + JPG como fallback para máxima compatibilidad
  const [imgLoaded, setImgLoaded] = useState(false);
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '/');
  const srcAvif = `${base}profile.avif`;
  const srcWebp = `${base}profile.webp`;
  const srcJpg = `${base}profile.jpg`;
  const [hadError, setHadError] = useState(false);

  // Unificar efecto con tarjetas de Skills: quitar VanillaTilt y usar hover lift + gradient (CSS).
  const tiltRef = useRef(null);
  const disableHoverLift = shouldReduceMotion; // Sólo se desactiva si reduce-motion

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

  // Typewriter state for rotating roles with custom timings
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0] || highlight);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  // Reset animation when translations change drastically
  useEffect(() => {
    setRoleIndex(0);
    setDisplayText(roles[0] || highlight);
    setIsDeleting(false);
  }, [roles, highlight]);

  useEffect(() => {
    const isTestEnv = import.meta.env.MODE === 'test' || Boolean(import.meta.env.VITEST);
    const enableTypewriter =
      effectsEnabled && !shouldReduceMotion && !isTestEnv && roles.length > 1;

    if (!enableTypewriter) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      setDisplayText(roles[0] || highlight);
      setRoleIndex(0);
      setIsDeleting(false);
      return;
    }

    const fullText = roles[roleIndex] || '';
    const currentLength = displayText.length;
    const { TYPE_SPEED, DELETE_SPEED, HOLD_FULL, HOLD_EMPTY } = TYPEWRITER_CONFIG;

    let delay = TYPE_SPEED;
    let nextAction = () => {};

    if (!isDeleting && currentLength < fullText.length) {
      nextAction = () => setDisplayText(fullText.slice(0, currentLength + 1));
    } else if (!isDeleting && currentLength === fullText.length) {
      delay = HOLD_FULL;
      nextAction = () => setIsDeleting(true);
    } else if (isDeleting && currentLength > 0) {
      delay = DELETE_SPEED;
      nextAction = () => setDisplayText(fullText.slice(0, currentLength - 1));
    } else if (isDeleting && currentLength === 0) {
      delay = HOLD_EMPTY;
      nextAction = () => {
        setIsDeleting(false);
        setRoleIndex((idx) => (idx + 1) % roles.length);
      };
    }

    timerRef.current = setTimeout(() => nextAction(), delay);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [displayText, isDeleting, roleIndex, roles, highlight, effectsEnabled, shouldReduceMotion]);

  // Asegura que el espacio entre nombres sea un espacio no separable para evitar saltos y que siempre se muestre
  const nameChars = useMemo(() => {
    if (!nameText) return [];
    // Reemplaza el primer espacio por un espacio no separable
    const idx = nameText.indexOf(' ');
    if (idx > 0) {
      return Array.from(nameText.slice(0, idx))
        .concat('\u00A0')
        .concat(Array.from(nameText.slice(idx + 1)));
    }
    return Array.from(nameText);
  }, [nameText]);

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
          {/* Separar el contenedor tilt del motion para evitar colisiones de transform */}
          <motion.div
            ref={tiltRef}
            className={!disableHoverLift ? 'hero-photo-tilt' : 'hero-photo-tilt is-static'}
            whileHover={
              !disableHoverLift
                ? { scale: 1.04, transition: { type: 'spring', stiffness: 200, damping: 18 } }
                : undefined
            }
            whileTap={
              !disableHoverLift
                ? { scale: 0.98, transition: { type: 'spring', stiffness: 250, damping: 20 } }
                : undefined
            }
          >
            <motion.div
              className="hero-photo"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={imgLoaded ? { opacity: 1, scale: 1 } : { opacity: 0.85, scale: 0.98 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {!hadError ? (
                <picture>
                  <source type="image/avif" srcSet={srcAvif} />
                  <source type="image/webp" srcSet={srcWebp} />
                  <img
                    src={srcJpg}
                    alt={altText}
                    className={imgLoaded ? 'hero-photo-img' : 'hero-photo-img is-loading'}
                    width="208"
                    height="208"
                    decoding="async"
                    fetchpriority="high"
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setHadError(true)}
                  />
                </picture>
              ) : (
                <div className="hero-photo-fallback" aria-label={altText} role="img">
                  <span>{initials}</span>
                </div>
              )}
            </motion.div>
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
