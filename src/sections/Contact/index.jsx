import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import './Contact.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Contact() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const buttonHover = shouldReduceMotion ? undefined : { scale: 1.05 };

  // Mensaje prellenado para WhatsApp (enfocado a reclutadores): saludo breve
  const whatsappText = useMemo(() => {
    const msg = 'Hola Cristian';
    try {
      return encodeURIComponent(msg);
    } catch {
      return 'Hola%20Cristian';
    }
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="animated-bg"></div>

      <motion.div
        className="contact-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="contact-title" dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-buttons">
          <motion.a
            href="/cv/Cristian-Bedoya-CV.pdf"
            download
            className="contact-btn btn cv"
            aria-label={t('contact.buttons.cv.aria')}
            whileHover={buttonHover}
          >
            <FaFileDownload className="icon" /> {t('contact.buttons.cv.label')}
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/cristian-alexander-bedoya-marin-ba1306277/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn linkedin"
            aria-label={t('contact.buttons.linkedin.aria')}
            whileHover={buttonHover}
          >
            <FaLinkedin className="icon" /> {t('contact.buttons.linkedin.label')}
          </motion.a>

          <motion.a
            href="mailto:cristian.bedoya02@usc.edu.co"
            className="contact-btn btn email"
            aria-label={t('contact.buttons.email.aria')}
            whileHover={buttonHover}
          >
            <FaEnvelope className="icon" /> {t('contact.buttons.email.label')}
          </motion.a>

          <motion.a
            href="https://github.com/cristianbedoya64"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn github"
            aria-label={t('contact.buttons.github.aria')}
            whileHover={buttonHover}
          >
            <FaGithub className="icon" /> {t('contact.buttons.github.label')}
          </motion.a>

          <motion.a
            href={`https://wa.me/573171084060?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn whatsapp"
            aria-label={t('contact.buttons.whatsapp.aria')}
            whileHover={buttonHover}
          >
            <FaWhatsapp className="icon" /> {t('contact.buttons.whatsapp.label')}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
