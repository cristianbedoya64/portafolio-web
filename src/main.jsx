import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import AnalyticsProvider from './components/AnalyticsProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <AnalyticsProvider />
      <App />
    </LanguageProvider>
  </StrictMode>,
);
