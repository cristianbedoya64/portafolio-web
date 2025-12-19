import React, { useCallback } from 'react';
import './LinkedIn.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function LinkedIn() {
  const { t, language } = useLanguage();
  const posts = t('linkedin.cards') || [];

  const prefetchLink = useCallback((href) => {
    try {
      if (!href || !/^https?:\/\//i.test(href)) return;
      if (navigator.connection?.saveData) return;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      link.as = 'document';
      document.head.appendChild(link);
    } catch {
      /* ignore */
    }
  }, []);

  const handleAnalyticsClick = useCallback((postTitle) => {
    try {
      if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
        window.plausible('LinkedIn Post Click', { props: { title: postTitle } });
      }
    } catch {
      /* ignore */
    }
  }, []);

  const formatPostDate = useCallback(
    (post) => {
      if (!post) return '';
      if (post.dateTime) {
        try {
          const d = new Date(post.dateTime);
          // Día + mes abreviado, sin año
          if (language === 'es') {
            const parts = new Intl.DateTimeFormat('es-ES', {
              day: '2-digit',
              month: 'short',
            })
              .format(d)
              .replace('.', ''); // normaliza posibles puntos en abreviaturas
            return parts;
          }
          const parts = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: '2-digit',
          }).format(d);
          return parts;
        } catch {
          // fallback al campo de texto
        }
      }
      return post.date || '';
    },
    [language],
  );

  return (
    <section id="linkedin" className="linkedin-section">
      <div className="animated-bg"></div>

      <div className="linkedin-content">
        <h2 className="linkedin-title">
          {t('linkedin.title')}
          {t('linkedin.highlight') && (
            <>
              {' '}
              <span>{t('linkedin.highlight')}</span>
            </>
          )}
        </h2>
        <p className="linkedin-subtitle">{t('linkedin.subtitle')}</p>

        <ul className="linkedin-posts" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {posts.map((post, index) => {
            const hasLink = Boolean(post.link);
            const content = (
              <>
                <h3>{post.title}</h3>
                <p className="linkedin-date">{formatPostDate(post)}</p>
                {post.description && <p className="linkedin-description">{post.description}</p>}
              </>
            );

            if (hasLink) {
              return (
                <li key={index} className="linkedin-card" role="listitem">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={`Abrir post de LinkedIn: ${post.title}`}
                    onMouseEnter={() => prefetchLink(post.link)}
                    onFocus={() => prefetchLink(post.link)}
                    onClick={() => handleAnalyticsClick(post.title)}
                  >
                    {content}
                  </a>
                </li>
              );
            }

            return (
              <li key={index} className="linkedin-card" role="listitem">
                {content}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
