// ...existing code...
import Hero from './sections/Hero/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Projects from './sections/Projects'; // fallback for SSR, will be replaced below

// Fuerza efectos pesados siempre habilitados en producción
const isProd = import.meta.env.MODE === 'production';
const DISABLE_HEAVY_EFFECTS = isProd ? false : (import.meta.env.VITE_DISABLE_HEAVY_EFFECTS ?? 'false') === 'true';
const LazyProjects = lazy(() => import('./sections/Projects'));
const LazyAI = lazy(() => import('./sections/AI'));
const LazyUpdates = lazy(() => import('./sections/Updates'));
const LazyLinkedIn = lazy(() => import('./sections/LinkedIn'));
const LazyContact = lazy(() => import('./sections/Contact'));
const LazyParticlesBackground = DISABLE_HEAVY_EFFECTS
  ? null
  : lazy(() => import('./components/ParticlesBackground.jsx'));
import Navbar from './components/Navbar/Navbar';
const LazyTechTrendsDashboard = DISABLE_HEAVY_EFFECTS
  ? null
  : lazy(() => import('./components/TechTrendsDashboard.jsx'));
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import FloatingStackIcons from './components/FloatingStackIcons.jsx';
import { useLanguage } from './contexts/LanguageContext.jsx';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion.js';
import { useEffects } from './contexts/EffectsContext.jsx';

export default function App() {
  const { t } = useLanguage();
  const { effectsEnabled } = useEffects();
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

  // Partículas: diferir hasta idle para bajar TBT, pero mantener visibles para usuarios.
  useEffect(() => {
    // En producción, fuerza partículas siempre activas
    if (isProd) {
      setShowParticles(true);
      return;
    }
    if (DISABLE_HEAVY_EFFECTS || prefersReducedMotion || navigator.webdriver || !effectsEnabled) {
      setShowParticles(false);
      return undefined;
    }

    let idleId;
    const enable = () => setShowParticles(true);

    if (typeof requestIdleCallback === 'function') {
      idleId = requestIdleCallback(enable, { timeout: 1200 });
    } else {
      idleId = setTimeout(enable, 900);
    }

    return () => {
      if (idleId) {
        typeof cancelIdleCallback === 'function' ? cancelIdleCallback(idleId) : clearTimeout(idleId);
      }
    };
  }, [prefersReducedMotion, effectsEnabled]);

  // Only load TechTrendsDashboard when it is near the viewport
  useEffect(() => {
    if (DISABLE_HEAVY_EFFECTS || showTrends) return undefined;
    const node = trendsProbeRef.current;
    if (node && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setShowTrends(true);
            observer.disconnect();
          }
        },
        { root: null, rootMargin: '0px 0px 16% 0px', threshold: 0.08 },
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
    return undefined;
  }, [showTrends]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t('navbar.skipToMain')}
      </a>
      {!DISABLE_HEAVY_EFFECTS && showParticles ? (
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
      {!DISABLE_HEAVY_EFFECTS && showTrends ? (
        <Suspense fallback={null}>
          <LazyTechTrendsDashboard />
        </Suspense>
      ) : null}
      <FloatingWhatsApp />
    </>
  );
}
