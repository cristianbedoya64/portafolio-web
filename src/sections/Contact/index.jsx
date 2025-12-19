import React, { useMemo } from 'react';
import {
  IconLinkedIn,
  IconGithub,
  IconMail,
  IconWhatsapp,
  IconDownload,
} from '../../components/icons/InlineIcons.jsx';
import './Contact.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

export default function Contact() {
  const { t, language } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Mensaje prellenado para WhatsApp (enfocado a reclutadores)
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

  return (
    <section id="contact" className={`contact${prefersReducedMotion ? ' reduced-motion' : ''}`}>
      <div className="animated-bg"></div>

      <div className="contact-content">
        <h2 className="contact-title" dangerouslySetInnerHTML={{ __html: t('contact.title') }} />
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-buttons">
          <a
            href={`${import.meta.env.BASE_URL}cv/${language === 'en' ? 'en-CristianBedoyaDev.pdf' : 'CristianBedoyaDev.pdf'}`}
            download={language === 'en' ? 'en-CristianBedoyaDev.pdf' : 'CristianBedoyaDev.pdf'}
            className="contact-btn btn cv"
            aria-label={t('contact.buttons.cv.aria')}
            onClick={e => e.stopPropagation()}
          >
            <IconDownload className="icon" aria-hidden="true" /> {t('contact.buttons.cv.label')}
          </a>

          <a
            href="https://www.linkedin.com/in/cristian-alexander-bedoya-marin-ba1306277/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn linkedin"
            aria-label={t('contact.buttons.linkedin.aria')}
          >
            <IconLinkedIn className="icon" aria-hidden="true" /> {t('contact.buttons.linkedin.label')}
          </a>

          <a
            href="mailto:cristian.bedoya02@usc.edu.co"
            className="contact-btn btn email"
            aria-label={t('contact.buttons.email.aria')}
          >
            <IconMail className="icon" aria-hidden="true" /> {t('contact.buttons.email.label')}
          </a>

          <a
            href="https://github.com/cristianbedoya64"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn github"
            aria-label={t('contact.buttons.github.aria')}
          >
            <IconGithub className="icon" aria-hidden="true" /> {t('contact.buttons.github.label')}
          </a>

          <a
            href={`https://wa.me/573171084060?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn whatsapp"
            aria-label={t('contact.buttons.whatsapp.aria')}
          >
            <IconWhatsapp className="icon" aria-hidden="true" /> {t('contact.buttons.whatsapp.label')}
          </a>
        </div>
      </div>
    </section>
  );
}
