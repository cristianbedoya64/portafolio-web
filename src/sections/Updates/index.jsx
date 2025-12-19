import React from 'react';
import './Updates.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Updates() {
  const { t } = useLanguage();
  const timeline = t('updates.entries') || [];

  return (
    <section id="updates" className="updates">
      <div className="animated-bg" aria-hidden="true"></div>

      <div className="updates-content">
        <span className="updates-badge" aria-hidden="true">
          {t('updates.badge')}
        </span>
        <h2 className="updates-title">{t('updates.title')}</h2>
        <p className="updates-subtitle">{t('updates.subtitle')}</p>

        <ul className="updates-timeline" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {timeline.map((item, index) => (
            <li key={`${item?.dateTime || index}-${item?.title || index}`} className="updates-card">
              <article>
                <time dateTime={item?.dateTime || ''}>{item?.dateLabel || ''}</time>
                <h3>{item?.title || ''}</h3>
                <p>{item?.description || ''}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
