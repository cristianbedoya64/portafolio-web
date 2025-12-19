import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useEffects } from '../../contexts/EffectsContext.jsx';

export default function Hero() {
  const { t, language } = useLanguage();
  const { effectsEnabled } = useEffects();
  const shouldReduceMotion = useReducedMotion();
  const [effectsArmed, setEffectsArmed] = useState(false);
  // Detect viewport width for animation gating; throttled to avoid resize-induced jank
  const [isWide, setIsWide] = useState(() => window.innerWidth >= 768);
  const resizeRaf = useRef(null);
  useEffect(() => {
    const onResize = () => {
      if (resizeRaf.current) return;
      resizeRaf.current = requestAnimationFrame(() => {
        setIsWide(window.innerWidth >= 768);
        resizeRaf.current = null;
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (resizeRaf.current) {
        cancelAnimationFrame(resizeRaf.current);
        resizeRaf.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!effectsEnabled || shouldReduceMotion) {
      setEffectsArmed(false);
      return;
    }
    let idleId;
    const arm = () => setEffectsArmed(true);
    if (typeof requestIdleCallback === 'function') {
      idleId = requestIdleCallback(arm, { timeout: 3500 });
    } else {
      idleId = setTimeout(arm, 3500);
    }
    const onScroll = () => {
      setEffectsArmed(true);
      if (idleId) {
        typeof cancelIdleCallback === 'function' ? cancelIdleCallback(idleId) : clearTimeout(idleId);
      }
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
    window.addEventListener('scroll', onScroll, { passive: true, once: true });
    return () => {
      if (idleId) {
        typeof cancelIdleCallback === 'function' ? cancelIdleCallback(idleId) : clearTimeout(idleId);
      }
      window.removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [effectsEnabled, shouldReduceMotion]);

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

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const longestRole = useMemo(() => {
    const pool = roles.length ? roles : [highlight];
    return pool.reduce((acc, curr) => ((curr?.length || 0) > (acc?.length || 0) ? curr : acc), '') ||
      highlight;
  }, [roles, highlight]);

  // Reset animation when translations change drastically
  useEffect(() => {
    setActiveRoleIndex(0);
  }, [roles, highlight]);

  useEffect(() => {
    const isTestEnv = import.meta.env.MODE === 'test' || Boolean(import.meta.env.VITEST);
    const enableCycle = effectsEnabled && !shouldReduceMotion && !isTestEnv && roles.length > 1;

    if (!enableCycle) {
      setActiveRoleIndex(0);
      return;
    }

    const interval = window.setInterval(() => {
      setActiveRoleIndex((idx) => (idx + 1) % roles.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [roles, highlight, effectsEnabled, shouldReduceMotion]);

  const activeRole = roles[activeRoleIndex] || highlight;

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

  const allowAnim = effectsEnabled && !shouldReduceMotion && isWide;
  const showRoleCycle = effectsEnabled && !shouldReduceMotion && roles.length > 1;
  const letterVariants = !allowAnim
    ? undefined
    : {
        hidden: { y: 16, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
  const nameContainer = !allowAnim
    ? undefined
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.035, delayChildren: 0.15 },
        },
      };

  const containerInitial = !allowAnim ? { opacity: 0 } : { opacity: 0, y: 24 };
  const containerAnimate = !allowAnim ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = !allowAnim
    ? { duration: 0.6, ease: 'linear' }
    : { duration: 1.2, ease: 'easeOut' };

  return (
    <section id="home" className={effectsArmed ? 'hero hero-effects-armed' : 'hero hero-effects-off'}>
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
              allowAnim
                ? 'hero-name hero-name-plain hero-name-marker-animated'
                : 'hero-name hero-name-plain'
            }
            variants={nameContainer}
            initial={nameContainer ? 'hidden' : undefined}
            animate={nameContainer ? 'visible' : undefined}
            role="text"
            style={!allowAnim ? { whiteSpace: 'nowrap' } : undefined}
          >
            {allowAnim
              ? nameChars.map((ch, idx) => (
                  <motion.span
                    key={`ch-${idx}-${ch}`}
                    className="char"
                    variants={letterVariants}
                    whileHover={allowAnim ? { y: -2 } : undefined}
                    aria-hidden="true"
                  >
                    {ch}
                  </motion.span>
                ))
              : nameText}
            {/* Accessible fallback text ensures screen readers read the name normally */}
            <span className="sr-only">{nameText}</span>
          </motion.span>
        </h1>
        <h2 className={effectsEnabled ? 'hero-highlight hero-highlight-animated' : 'hero-highlight'}>
          {showRoleCycle ? (
            <motion.span
              key={activeRoleIndex}
              className="hero-role-slot"
              style={{ minWidth: `${Math.max(6, longestRole.length)}ch` }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              aria-live="polite"
            >
              {activeRole}
            </motion.span>
          ) : (
            highlight
          )}
        </h2>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <div className="hero-actions">
          <a className="hero-btn" href="#projects">
            {t('hero.cta')}
          </a>
          <a
            className="hero-btn hero-btn--secondary"
            href="https://github.com/cristianbedoya64/portafolio-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.repoCta')}
          </a>
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
