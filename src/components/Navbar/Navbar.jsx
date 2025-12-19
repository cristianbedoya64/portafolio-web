import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { TRANSLATIONS } from '../../i18n/translations.js';
import { useEffects } from '../../contexts/EffectsContext.jsx';

export default function Navbar() {
  const { language, toggleLanguage, t, translations } = useLanguage();
  const { effectsEnabled, toggleEffects } = useEffects();
  const nextLanguage = language === 'es' ? 'en' : 'es';
  const languageLabel = translations?.languageNames?.[language] ?? language.toUpperCase();
  const languageToggleLabel = translations?.navbar?.languageToggle ?? '';
  const nextLanguageToggleLabel = TRANSLATIONS[nextLanguage]?.navbar?.languageToggle ?? '';

  const handleNavClick = (e) => {
    const target = e.target.closest('a');
    if (!target) return;
    // Si el enlace tiene el atributo download, no interceptar
    if (target.hasAttribute('download')) return;
    const href = target.getAttribute('href') || '';
    if (!href.startsWith('#')) return; // external links keep default
    e.preventDefault();
    const hash = href.slice(1);
    if (!hash || hash === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try {
        history.replaceState(null, '', '#home');
      } catch {
        void 0;
      }
      return;
    }
    const el = document.getElementById(hash);
    if (el) {
      const navHeight =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '58',
          10,
        ) || 58;
      const rect = el.getBoundingClientRect();
      const top = window.scrollY + rect.top - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      try {
        history.replaceState(null, '', `#${hash}`);
      } catch {
        void 0;
      }
    }
  };

  // Theme toggle (safe, incremental): toggles class 'light-theme' on <html>
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    } catch {
      void 0;
      return 'dark';
    }
  });

  useEffect(() => {
    try {
      if (theme === 'light') document.documentElement.classList.add('light-theme');
      else document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', theme);
    } catch {
      void 0;
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <header className="site-nav" role="banner">
      <div className="nav-inner">
        <a
          className="nav-brand"
          href="#home"
          aria-label={t('navbar.home')}
          onClick={handleNavClick}
        >
          {t('navbar.brand')}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            className="language-toggle btn"
            aria-label={languageToggleLabel}
            title={nextLanguageToggleLabel || languageToggleLabel}
            onClick={toggleLanguage}
            type="button"
          >
            {languageLabel}
          </button>
          <button
            className="theme-toggle btn"
            aria-pressed={theme === 'light'}
            aria-label={t('navbar.themeToggle')}
            onClick={toggleTheme}
            title={t('navbar.themeToggle')}
            type="button"
          >
            {theme === 'light' ? '🌞' : '🌙'}
          </button>
          <button
            className="effects-toggle btn"
            aria-pressed={effectsEnabled}
            aria-label={t('navbar.effectsToggle')}
            onClick={toggleEffects}
            title={t('navbar.effectsToggle')}
            type="button"
          >
            {effectsEnabled ? '✨' : '🚫✨'}
          </button>
          <nav
            className="nav-links"
            role="navigation"
            aria-label="main navigation"
            onClick={handleNavClick}
          >
            <a href="#home" aria-label={t('navbar.home')}>
              {t('navbar.home')}
            </a>
            <a href="#about" aria-label={t('navbar.about')}>
              {t('navbar.about')}
            </a>
            <a href="#skills" aria-label={t('navbar.skills')}>
              {t('navbar.skills')}
            </a>
            <a href="#projects" aria-label={t('navbar.projects')}>
              {t('navbar.projects')}
            </a>
            <a href="#linkedin" aria-label={t('navbar.linkedin')}>
              {t('navbar.linkedin')}
            </a>
            <a href="#ai" aria-label={t('navbar.ai')}>
              {t('navbar.ai')}
            </a>
            <a href="#contact" aria-label={t('navbar.contact')}>
              {t('navbar.contact')}
            </a>
            <a
              className="cv-link"
              href={`${import.meta.env.BASE_URL}cv/${language === 'en' ? 'en-CristianBedoyaDev.pdf' : 'CristianBedoyaDev.pdf'}`}
              download={language === 'en' ? 'en-CristianBedoyaDev.pdf' : 'CristianBedoyaDev.pdf'}
              aria-label={t('navbar.cvAria')}
            >
              {t('navbar.cv')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
