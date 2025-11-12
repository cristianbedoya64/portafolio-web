import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

// Fondo de partículas liviano para no inflar demasiado el bundle.
// Ajustado para un look sutil tecnológico.
export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, area: 900 } },
      color: { value: ['#38bdf8', '#ff6600'] },
      links: { enable: false },
      move: { enable: true, speed: 0.5, outModes: { default: 'out' } },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 3 } },
      shadow: { enable: true, color: '#0ea5e9', blur: 1 },
    },
    interactivity: { events: {} },
    detectRetina: true,
  };

  return (
    <div className="particles-wrapper" aria-hidden="true">
      <Particles init={init} options={options} />
    </div>
  );
}
