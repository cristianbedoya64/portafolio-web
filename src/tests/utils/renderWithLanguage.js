import React from 'react';
import { render } from '@testing-library/react';
import { LanguageProvider } from '../../contexts/LanguageContext.jsx';

export function renderWithLanguage(ui, { language = 'es', ...options } = {}) {
  function Wrapper({ children }) {
    return React.createElement(LanguageProvider, { initialLanguage: language }, children);
  }

  return render(ui, { wrapper: Wrapper, ...options });
}
