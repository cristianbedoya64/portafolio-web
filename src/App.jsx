// ...existing code...
import Hero from './sections/Hero/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Projects from './sections/Projects'; // fallback for SSR, will be replaced below
const LazyProjects = lazy(() => import('./sections/Projects'));
const LazyAI = lazy(() => import('./sections/AI'));
const LazyUpdates = lazy(() => import('./sections/Updates'));
const LazyLinkedIn = lazy(() => import('./sections/LinkedIn'));
const LazyContact = lazy(() => import('./sections/Contact'));
const LazyParticlesBackground = lazy(() => import('./components/ParticlesBackground.jsx'));
import Navbar from './components/Navbar/Navbar';
const LazyTechTrendsDashboard = lazy(() => import('./components/TechTrendsDashboard.jsx'));
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import FloatingStackIcons from './components/FloatingStackIcons.jsx';
import { useLanguage } from './contexts/LanguageContext.jsx';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.js';

export default function App() {
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showParticles, setShowParticles] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  const trendsProbeRef = useRef(null);
  const effectsArmedRef = useRef(false);

  useEffect(() => {
    // ensure body scrolls to top on mount (SPA navigation edge-case)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Activate non-critical effects (glows/animations) only after idle or first scroll
  useEffect(() => {
    if (effectsArmedRef.current) return;
    let idleId;
    const arm = () => {
      if (effectsArmedRef.current) return;
      effectsArmedRef.current = true;
      document.documentElement.classList.add('effects-armed');
      if (idleId) {
        typeof cancelIdleCallback === 'function' ? cancelIdleCallback(idleId) : clearTimeout(idleId);
      }
      window.removeEventListener('scroll', arm, { passive: true });
    };
    if (typeof requestIdleCallback === 'function') {
      idleId = requestIdleCallback(arm, { timeout: 4500 });
    } else {
      idleId = setTimeout(arm, 4500);
    }
    window.addEventListener('scroll', arm, { passive: true, once: true });
    return () => {
      if (idleId) {
        typeof cancelIdleCallback === 'function' ? cancelIdleCallback(idleId) : clearTimeout(idleId);
      }
      window.removeEventListener('scroll', arm, { passive: true });
    };
  }, []);

  // Lazy-activate animated backgrounds when they enter viewport to avoid initial paint cost
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.animated-bg'));
    if (!nodes.length) return;
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((el) => el.classList.add('animated-bg--active'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated-bg--active');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '10% 0px 10% 0px', threshold: 0.05 },
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Global particles background: single instance for all sections (disabled on reduce-motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowParticles(false);
      return undefined;
    }
    setShowParticles(true);
    return undefined;
  }, [prefersReducedMotion]);

  // Only load TechTrendsDashboard when near viewport (or after idle fallback)
  useEffect(() => {
    if (showTrends) return;
    const node = trendsProbeRef.current;
    let timeoutId;
    if (typeof requestIdleCallback === 'function') {
      timeoutId = requestIdleCallback(() => setShowTrends(true), { timeout: 8000 });
    } else {
      timeoutId = setTimeout(() => setShowTrends(true), 8000);
    }
    if (node && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShowTrends(true);
            observer.disconnect();
            if (timeoutId) {
              typeof cancelIdleCallback === 'function'
                ? cancelIdleCallback(timeoutId)
                : clearTimeout(timeoutId);
            }
          }
        },
        { root: null, rootMargin: '0px 0px 20% 0px', threshold: 0.05 },
      );
      observer.observe(node);
      return () => {
        observer.disconnect();
        if (timeoutId) {
          typeof cancelIdleCallback === 'function'
            ? cancelIdleCallback(timeoutId)
            : clearTimeout(timeoutId);
        }
      };
    }
    return () => {
      if (timeoutId) {
        typeof cancelIdleCallback === 'function'
          ? cancelIdleCallback(timeoutId)
          : clearTimeout(timeoutId);
      }
    };
  }, [showTrends]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t('navbar.skipToMain')}
      </a>
      {showParticles ? (
        <Suspense fallback={null}>
          <div className="global-particles">
            <LazyParticlesBackground />
          </div>
        </Suspense>
      ) : null}
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
      <div ref={trendsProbeRef} aria-hidden="true" />
      {showTrends ? (
        <Suspense fallback={null}>
          <LazyTechTrendsDashboard />
        </Suspense>
      ) : null}
      <FloatingWhatsApp />
    </>
  );
}
