import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Projects.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

function buildJsonLd(projects, locale) {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: locale === 'en' ? 'Highlighted Projects' : 'Proyectos destacados',
    itemListElement: projects.map((p, idx) => ({
      '@type': 'CreativeWork',
      position: idx + 1,
      name: p.title,
      description: p.description,
      about: Array.isArray(p.highlights) ? p.highlights.join(', ') : undefined,
      keywords: Array.isArray(p.highlights) ? p.highlights : undefined,
      dateCreated: p.badge && /\d{4}/.test(p.badge) ? p.badge : undefined,
      url: Array.isArray(p.links) && p.links[0]?.href ? p.links[0].href : undefined,
    })),
  };
  return JSON.stringify(itemList);
}

function prefetchLink(href) {
  try {
    if (!href || !/^https?:\/\//i.test(href)) return;
    if (navigator.connection?.saveData) return; // respeta ahorro de datos
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = 'document';
    document.head.appendChild(link);
  } catch {
    /* ignore */
  }
}

export default function Projects() {
  const trapRef = useRef(null);
  const { t, language, translations } = useLanguage();
  // Estabiliza la referencia de projectCards usando translations, que cambia solo con el idioma
  const projectCards = useMemo(() => {
    const list = translations?.projects?.cards;
    return Array.isArray(list) ? list : [];
  }, [translations]);
  const shouldReduceMotion = useReducedMotion();
  const [detailCardIndex, setDetailCardIndex] = useState(null);

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.6, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.04, y: -4 };

  const jsonLd = useMemo(() => buildJsonLd(projectCards, language), [projectCards, language]);
  const activeProject =
    typeof detailCardIndex === 'number' && projectCards[detailCardIndex]
      ? projectCards[detailCardIndex]
      : null;
  const detailCard = useMemo(() => {
    if (!activeProject?.buildDetails) return null;
    return {
      projectName: activeProject.title,
      ...activeProject.buildDetails,
    };
  }, [activeProject]);
  const handleAnalyticsClick = useCallback((projectTitle, linkLabel) => {
    try {
      if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
        window.plausible('Project Link Click', {
          props: { project: projectTitle, link: linkLabel },
        });
      }
    } catch {
      /* ignore */
    }
  }, []);
  const handleOpenDetails = useCallback((projectIndex) => {
    setDetailCardIndex(typeof projectIndex === 'number' ? projectIndex : null);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setDetailCardIndex(null);
  }, []);

  useEffect(() => {
    if (!detailCard) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseDetails();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [detailCard, handleCloseDetails]);

  useEffect(() => {
    if (!detailCard) return;
    // Focus trap
    const trap = trapRef.current;
    if (trap) {
      const focusable = trap.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length) focusable[0].focus();
      const handleTab = (e) => {
        if (e.key !== 'Tab') return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      trap.addEventListener('keydown', handleTab);
      // Scroll lock
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        trap.removeEventListener('keydown', handleTab);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [detailCard]);

  const detailOverlay = detailCard
    ? (() => {
        const stackLabel =
          detailCard.stackLabel || (language === 'en' ? 'Main stack' : 'Stack principal');
        const metricsLabel =
          detailCard.metricsLabel || (language === 'en' ? 'Measurable impact' : 'Impacto medible');
        const closeLabel =
          detailCard.closeLabel || (language === 'en' ? 'Close details' : 'Cerrar detalle');

        return (
          <div
            className="project-detail-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={detailCard.title || detailCard.projectName}
            onClick={handleCloseDetails}
            ref={trapRef}
          >
            <motion.div
              className="project-detail-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-detail-card-head">
                {detailCard.timeline && (
                  <span className="project-detail-timeline">{detailCard.timeline}</span>
                )}
                <button
                  type="button"
                  className="project-detail-close"
                  onClick={handleCloseDetails}
                  aria-label={closeLabel}
                >
                  ×
                </button>
              </div>

              <div className="project-detail-body">
                <p className="project-detail-chip">{detailCard.projectName}</p>
                <h3>{detailCard.title}</h3>
                {detailCard.subtitle && (
                  <p className="project-detail-subtitle">{detailCard.subtitle}</p>
                )}
                {detailCard.summary && (
                  <p className="project-detail-summary">{detailCard.summary}</p>
                )}

                {Array.isArray(detailCard.stack) && detailCard.stack.length > 0 && (
                  <div className="project-detail-section">
                    <p className="project-detail-section-title">{stackLabel}</p>
                    <div className="project-detail-chips">
                      {detailCard.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {Array.isArray(detailCard.sections) && detailCard.sections.length > 0 && (
                  <div className="project-detail-grid">
                    {detailCard.sections.map((section) => (
                      <div key={section.title} className="project-detail-section-card">
                        <p className="project-detail-section-title">{section.title}</p>
                        {Array.isArray(section.items) ? (
                          <ul>
                            {section.items.map((item, index) => (
                              <li key={`${section.title}-${index}`}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{section.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {Array.isArray(detailCard.metrics) && detailCard.metrics.length > 0 && (
                  <div className="project-detail-section">
                    <p className="project-detail-section-title">{metricsLabel}</p>
                    <ul className="project-detail-metrics">
                      {detailCard.metrics.map((metric, index) => (
                        <li key={`metric-${index}`}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        );
      })()
    : null;

  return (
    <section id="projects" className="projects">
      <div className="animated-bg" aria-hidden="true"></div>
      {/* SEO: JSON-LD for highlighted projects */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <motion.div
        className="projects-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
        <h2 className="projects-title">{t('projects.title')}</h2>
        <p className="projects-subtitle">{t('projects.subtitle')}</p>

        <div className="projects-grid" role="list">
          {projectCards.map((project, index) => {
            const highlights = Array.isArray(project.highlights) ? project.highlights : [];
            const links =
              Array.isArray(project.links) && project.links.length > 0
                ? project.links
                : project.action
                  ? [
                      {
                        label: project.action,
                        href: project.link || '#',
                        variant: 'primary',
                        aria: project.action,
                      },
                    ]
                  : [];

            return (
              <motion.article
                key={project.title + index}
                className="project-card"
                role="listitem"
                whileHover={cardHover}
                transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.3 }}
              >
                <div className="project-card-head">
                  <h3>{project.title}</h3>
                  {project.badge && <span className="project-card-badge">{project.badge}</span>}
                </div>

                {project.description && (
                  <p className="project-card-description">{project.description}</p>
                )}

                {Array.isArray(project.outcomes) && project.outcomes.length > 0 && (
                  <ul
                    className="project-card-outcomes"
                    aria-label={
                      language === 'en'
                        ? `${project.title} outcomes`
                        : `Resultados de ${project.title}`
                    }
                  >
                    {project.outcomes.map((line, i) => (
                      <li key={`${project.title}-outcome-${i}`}>{line}</li>
                    ))}
                  </ul>
                )}

                {highlights.length > 0 && (
                  <ul className="project-card-tags" aria-label={`${project.title} tech stack`}>
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {links.length > 0 && (
                  <div className="project-card-links" role="list">
                    {links.map((link) => {
                      const href = link.href || '#';
                      const isExternal = /^https?:\/\//i.test(href);
                      const variant = link.variant
                        ? `project-link--${link.variant}`
                        : 'project-link--primary';

                      const extraClass = link.type === 'details' ? 'project-link--details' : '';

                      if (link.type === 'details') {
                        return (
                          <button
                            key={`${project.title}-${link.label}`}
                            type="button"
                            className={`project-link ${variant} ${extraClass}`}
                            aria-label={link.aria || link.label}
                            role="listitem"
                            onClick={() => {
                              handleAnalyticsClick(project.title, link.label);
                              handleOpenDetails(index);
                            }}
                          >
                            {link.label}
                          </button>
                        );
                      }

                      return (
                        <a
                          key={`${project.title}-${link.label}`}
                          className={`project-link ${variant} ${extraClass}`}
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          aria-label={link.aria || link.label}
                          role="listitem"
                          onMouseEnter={() => prefetchLink(href)}
                          onFocus={() => prefetchLink(href)}
                          onClick={() => handleAnalyticsClick(project.title, link.label)}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {detailOverlay}
    </section>
  );
}
