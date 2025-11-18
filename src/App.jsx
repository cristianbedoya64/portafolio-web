// ...existing code...
import Hero from './sections/Hero/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import { Suspense, lazy, useEffect } from 'react';
import Projects from './sections/Projects'; // fallback for SSR, will be replaced below
const LazyProjects = lazy(() => import('./sections/Projects'));
const LazyAI = lazy(() => import('./sections/AI'));
const LazyUpdates = lazy(() => import('./sections/Updates'));
const LazyLinkedIn = lazy(() => import('./sections/LinkedIn'));
const LazyContact = lazy(() => import('./sections/Contact'));
import Navbar from './components/Navbar/Navbar';
const LazyTechTrendsDashboard = lazy(() => import('./components/TechTrendsDashboard.jsx'));
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import FloatingStackIcons from './components/FloatingStackIcons.jsx';
import { useLanguage } from './contexts/LanguageContext.jsx';

export default function App() {
  const { t } = useLanguage();
  useEffect(() => {
    // ensure body scrolls to top on mount (SPA navigation edge-case)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {t('navbar.skipToMain')}
      </a>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <FloatingStackIcons />
        <About />
        <Skills />
        <Suspense fallback={null}>
          <LazyProjects />
        </Suspense>
        <Suspense fallback={null}>
          <LazyLinkedIn />
        </Suspense>
        <Suspense fallback={null}>
          <LazyAI />
        </Suspense>
        <Suspense fallback={null}>
          <LazyContact />
        </Suspense>
        <Suspense fallback={null}>
          <LazyUpdates />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <LazyTechTrendsDashboard />
      </Suspense>
      <FloatingWhatsApp />
    </>
  );
}
