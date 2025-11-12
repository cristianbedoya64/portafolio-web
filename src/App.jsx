import { useEffect } from 'react';
import Hero from './sections/Hero/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Updates from './sections/Updates';
import LinkedIn from './sections/LinkedIn';
import AI from './sections/AI';
import Contact from './sections/Contact';
import Navbar from './components/Navbar/Navbar';
import TechTrendsDashboard from './components/TechTrendsDashboard.jsx';
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
        <About />
        <Skills />
        <Projects />
        <Updates />
        <LinkedIn />
        <AI />
        <Contact />
      </main>
      <TechTrendsDashboard />
    </>
  );
}
