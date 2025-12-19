import React, { useMemo, useCallback, useState } from 'react';
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
  const { t, language, translations } = useLanguage();
  const projectCards = useMemo(() => {
    const list = translations?.projects?.cards;
    return Array.isArray(list) ? list : [];
  }, [translations]);
  const [expanded, setExpanded] = useState(null);

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

  const toggleExpand = (idx) => setExpanded(expanded === idx ? null : idx);

  const jsonLd = useMemo(() => buildJsonLd(projectCards, language), [projectCards, language]);

  return (
    <section id="projects" className="projects">
      <div className="animated-bg" aria-hidden="true"></div>
      {/* SEO: JSON-LD for highlighted projects */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="projects-content">
        <h2 className="projects-title">{t('projects.title')}</h2>
        <p className="projects-subtitle">{t('projects.subtitle')}</p>

        <ul className="projects-grid" aria-label={t('projects.title')} style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
            const expandedDetails = project.buildDetails;
            return (
              <li key={project.title + index} className="project-card-wrapper" role="listitem">
                <section
                  className={`project-card mini-section${expanded === index ? ' expanded' : ''}`}
                  aria-labelledby={`project-title-${index}`}
                >
                  <header className="project-card-head" onClick={() => toggleExpand(index)} style={{cursor:'pointer'}}>
                    <h3 id={`project-title-${index}`}>{project.title}</h3>
                    {project.badge && <span className="project-card-badge">{project.badge}</span>}
                    <button
                      className="project-expand-btn"
                      aria-label={expanded === index ? 'Ocultar detalles' : 'Mostrar detalles'}
                      aria-expanded={expanded === index}
                      tabIndex={0}
                      type="button"
                    >
                      <span aria-hidden="true">{expanded === index ? '−' : '+'}</span>
                      <span className="sr-only">{expanded === index ? 'Ocultar detalles' : 'Mostrar detalles'}</span>
                    </button>
                  </header>

                  <div className="project-card-main">
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
                      <ul className="project-card-links" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {links.map((link) => {
                          const href = link.href || '#';
                          const isExternal = /^https?:\/\//i.test(href);
                          // Solo el botón Demo interactiva (exactamente) mantiene --primary
                          const isDemo = link.variant === 'primary' &&
                            (link.label.trim().toLowerCase() === 'demo interactiva' || link.label.trim().toLowerCase() === 'interactive demo');
                          const variant = isDemo
                            ? 'project-link--primary'
                            : 'project-link--details';
                          const extraClass = [
                            link.highlight ? 'project-link--highlight' : '',
                          ].join(' ');
                          const icon = link.icon ? (
                            <span className="project-link-icon" aria-hidden="true">{link.icon}</span>
                          ) : null;

                          return (
                            <li key={`${project.title}-${link.label}`} className="project-card-link-item">
                              <a
                                className={`project-link ${variant} ${extraClass}`}
                                href={href}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                aria-label={link.aria || link.label}
                                onMouseEnter={() => prefetchLink(href)}
                                onFocus={() => prefetchLink(href)}
                                onClick={() => handleAnalyticsClick(project.title, link.label)}
                                aria-current={link.highlight ? 'true' : undefined}
                              >
                                {icon}
                                {link.label}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {expanded === index && expandedDetails && (
                    <div className="project-card-details">
                      <h4>{expandedDetails.title}</h4>
                      {expandedDetails.subtitle && <p className="project-detail-subtitle">{expandedDetails.subtitle}</p>}
                      {expandedDetails.summary && <p className="project-detail-summary">{expandedDetails.summary}</p>}
                      {Array.isArray(expandedDetails.stack) && expandedDetails.stack.length > 0 && (
                        <div className="project-detail-section">
                          <p className="project-detail-section-title">{expandedDetails.stackLabel || (language === 'en' ? 'Main stack' : 'Stack principal')}</p>
                          <div className="project-detail-chips">
                            {expandedDetails.stack.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {Array.isArray(expandedDetails.sections) && expandedDetails.sections.length > 0 && (
                        <div className="project-detail-grid">
                          {expandedDetails.sections.map((section) => (
                            <div key={section.title} className="project-detail-section-card">
                              <p className="project-detail-section-title">{section.title}</p>
                              {Array.isArray(section.items) ? (
                                <ul>
                                  {section.items.map((item, idx) => (
                                    <li key={`${section.title}-${idx}`}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{section.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {Array.isArray(expandedDetails.metrics) && expandedDetails.metrics.length > 0 && (
                        <div className="project-detail-section">
                          <p className="project-detail-section-title">{expandedDetails.metricsLabel || (language === 'en' ? 'Measurable impact' : 'Impacto medible')}</p>
                          <ul className="project-detail-metrics">
                            {expandedDetails.metrics.map((metric, idx) => (
                              <li key={`metric-${idx}`}>{metric}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
