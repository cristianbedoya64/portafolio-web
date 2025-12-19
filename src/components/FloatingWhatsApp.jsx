import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './FloatingWhatsApp.css';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useEffects } from '../contexts/EffectsContext.jsx';
import { IconWhatsapp } from './icons/InlineIcons.jsx';

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const { effectsEnabled } = useEffects();
  const shouldReduceMotion = useReducedMotion();

  const whatsappText = useMemo(() => {
    const msg =
      language === 'en'
        ? "Hi Cristian, I'm a recruiter at [Company]. I'd like to talk about an opportunity."
        : 'Hola Cristian, soy reclutador de [Empresa]. Me gustaría conversar sobre una oportunidad.';
    try {
      return encodeURIComponent(msg);
    } catch {
      return language === 'en'
        ? 'Hi%20Cristian%2C%20I%27m%20a%20recruiter%20at%20%5BCompany%5D.%20I%27d%20like%20to%20talk%20about%20an%20opportunity.'
        : 'Hola%20Cristian%2C%20soy%20reclutador%20de%20%5BEmpresa%5D.%20Me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.';
    }
  }, [language]);

  const href = `https://wa.me/573171084060?text=${whatsappText}`;
  const motionAllowed = effectsEnabled && !shouldReduceMotion;

  const animateProps = motionAllowed
    ? { x: [0, -18, 16, -12, 0], y: [0, 14, -12, 18, 0], rotate: [0, 2, -2, 1, 0] }
    : undefined;
  const transitionProps = motionAllowed
    ? { duration: 14, ease: 'easeInOut', repeat: Infinity }
    : undefined;

  const handleClick = () => {
    try {
      if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
        window.plausible('WhatsApp Floating Click');
      }
    } catch {
      /* ignore */
    }
  };

  return (
    <motion.a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp con Cristian"
      title="WhatsApp"
      whileHover={motionAllowed ? { scale: 1.08 } : undefined}
      whileTap={motionAllowed ? { scale: 0.94 } : undefined}
      animate={animateProps}
      transition={transitionProps}
      onClick={handleClick}
    >
      <span className="fw-glow" aria-hidden="true" />
      <IconWhatsapp className="fw-icon" aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </motion.a>
  );
}
