import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { TRANSLATIONS } from '../i18n/translations';

const DEFAULT_LANGUAGE = 'es';

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: () => '',
  translations: TRANSLATIONS[DEFAULT_LANGUAGE],
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem('lang');
      if (stored && TRANSLATIONS[stored]) return stored;
    } catch (error) {
      console.warn('Language storage unavailable', error);
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', language);
    } catch (error) {
      console.warn('Unable to persist language', error);
    }
  }, [language]);

  const value = useMemo(() => {
    const translations = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
    const t = (path) => {
      if (!path) return '';
      return path.split('.').reduce((acc, key) => acc && acc[key], translations) ?? '';
    };

    const toggleLanguage = () => setLanguage((current) => (current === 'es' ? 'en' : 'es'));

    return { language, setLanguage, toggleLanguage, t, translations };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
