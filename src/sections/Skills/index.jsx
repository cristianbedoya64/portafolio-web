import React from 'react';
import './Skills.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';

export default function Skills() {
  const { t, translations } = useLanguage();
  const items = translations?.skills?.items ?? [];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">{t('skills.title')}</h2>
        <p className="skills-description">{t('skills.description')}</p>

        <div className="skills-grid">
          {items.map((skill, index) => (
            <div key={skill.name + index} className="skill-card">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
