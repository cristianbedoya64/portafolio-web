import React, { useMemo, useCallback } from 'react';
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
  const { t, language } = useLanguage();
  const rawProjects = t('projects.cards');
  const projectCards = Array.isArray(rawProjects) ? rawProjects : [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.6, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.04, y: -4 };

  const jsonLd = useMemo(() => buildJsonLd(projectCards, language), [projectCards, language]);
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

  return (
    <section id="projects" className="projects">
      <div className="animated-bg"></div>
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

                      return (
                        <a
                          key={`${project.title}-${link.label}`}
                          className={`project-link ${variant}`}
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
    </section>
  );
}
