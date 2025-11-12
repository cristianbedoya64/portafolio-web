import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

// Hook para aplicar tilt 3D con glare a un elemento.
// Desactiva automáticamente en usuarios con reduce-motion.
export default function useTilt(options = {}, disabled = false) {
  const ref = useRef(null);

  useEffect(() => {
    if (disabled) return;
    const node = ref.current;
    if (!node) return;

    const defaultOpts = {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.02,
      gyroscope: true,
      perspective: 900,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
    };

    VanillaTilt.init(node, { ...defaultOpts, ...options });
    return () => {
      try {
        node.vanillaTilt?.destroy();
      } catch (_error) {
        void _error;
        // Ignoramos errores de destrucción porque VanillaTilt no siempre adjunta instancia en SSR/HMR.
      }
    };
  }, [options, disabled]);

  return ref;
}
