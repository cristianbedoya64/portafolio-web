import React from 'react';
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

        <div className="linkedin-posts">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              className="linkedin-card"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={cardHover}
            >
              <h3>{post.title}</h3>
              <p className="linkedin-date">{post.date}</p>
              {post.description && <p className="linkedin-description">{post.description}</p>}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
