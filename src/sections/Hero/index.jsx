import { Suspense, lazy } from 'react';

const LazyParticlesBackground = lazy(() => import('../../components/ParticlesBackground.jsx'));

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <Suspense fallback={null}>
        <LazyParticlesBackground />
      </Suspense>
      <h1 className="hero-title">¡Hola, soy Cristian!</h1>
      <p className="hero-subtitle">Bienvenido a mi portafolio web interactivo 🚀</p>
      <button>Contáctame</button>
    </section>
  );
}
