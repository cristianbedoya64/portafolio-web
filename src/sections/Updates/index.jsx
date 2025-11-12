import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Updates.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Updates() {
  const { t } = useLanguage();
  const timeline = t('updates.entries') || [];
  const shouldReduceMotion = useReducedMotion();

  const containerInitial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const containerWhileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const containerTransition = shouldReduceMotion
    ? { duration: 0.5, ease: 'linear' }
    : { duration: 0.8, ease: 'easeOut' };

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

  const cardTransition = shouldReduceMotion
    ? { duration: 0.25 }
    : { duration: 0.45, ease: 'easeOut' };

  return (
    <section id="updates" className="updates">
      <div className="animated-bg" aria-hidden="true"></div>

      <motion.div
        className="updates-content"
        initial={containerInitial}
        whileInView={containerWhileInView}
        transition={containerTransition}
        viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      >
        <span className="updates-badge" aria-hidden="true">
          {t('updates.badge')}
        </span>
        <h2 className="updates-title">{t('updates.title')}</h2>
        <p className="updates-subtitle">{t('updates.subtitle')}</p>

        <div className="updates-timeline" role="list">
          {timeline.map((item, index) => (
            <motion.article
              key={`${item?.dateTime || index}-${item?.title || index}`}
              className="updates-card"
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              variants={cardVariants}
              transition={{
                ...cardTransition,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
            >
              <time dateTime={item?.dateTime || ''}>{item?.dateLabel || ''}</time>
              <h3>{item?.title || ''}</h3>
              <p>{item?.description || ''}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
