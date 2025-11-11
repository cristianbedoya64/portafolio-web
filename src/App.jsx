import { Suspense, lazy } from 'react';
import Hero from './sections/Hero/Hero';
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const LinkedIn = lazy(() => import('./sections/LinkedIn'));
const AI = lazy(() => import('./sections/AI'));
const Contact = lazy(() => import('./sections/Contact'));
import Navbar from './components/Navbar/Navbar';
import { useLanguage } from './contexts/LanguageContext.jsx';

export default function App() {
  const { t } = useLanguage();

  const renderFallback = () => (
    <div className="section-loading" role="status" aria-live="polite">
      <span>{t('ui.loadingSection')}</span>
    </div>
  );

  return (
    <>
      <a className="skip-link" href="#main">
        {t('navbar.skipToMain')}
      </a>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <Suspense fallback={renderFallback()}>
          <About />
        </Suspense>
        <Suspense fallback={renderFallback()}>
          <Skills />
        </Suspense>
        <Suspense fallback={renderFallback()}>
          <Projects />
        </Suspense>
        <Suspense fallback={renderFallback()}>
          <LinkedIn />
        </Suspense>
        <Suspense fallback={renderFallback()}>
          <AI />
        </Suspense>
        <Suspense fallback={renderFallback()}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
