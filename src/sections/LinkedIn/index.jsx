import React, { useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './LinkedIn.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function LinkedIn() {
  const { t } = useLanguage();
  const posts = t('linkedin.cards') || [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 1, ease: 'easeOut' };
  const cardHover = shouldReduceMotion ? undefined : { scale: 1.03 };

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

  return (
    <section id="linkedin" className="linkedin-section">
      <div className="animated-bg"></div>

      <motion.div
        className="linkedin-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true }}
      >
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

        <div className="linkedin-posts" role="list">
          {posts.map((post, index) => {
            const hasLink = Boolean(post.link);
            const content = (
              <>
                <h3>{post.title}</h3>
                <p className="linkedin-date">{post.date}</p>
                {post.description && <p className="linkedin-description">{post.description}</p>}
              </>
            );

            if (hasLink) {
              return (
                <motion.a
                  key={index}
                  href={post.link}
                  className="linkedin-card"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`Abrir post de LinkedIn: ${post.title}`}
                  role="listitem"
                  whileHover={cardHover}
                  onMouseEnter={() => prefetchLink(post.link)}
                  onFocus={() => prefetchLink(post.link)}
                  onClick={() => handleAnalyticsClick(post.title)}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={index}
                className="linkedin-card"
                role="listitem"
                whileHover={cardHover}
              >
                {content}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
