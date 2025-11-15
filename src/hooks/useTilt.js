import { useRef } from 'react';

// No-op tilt hook: dependencia removida. Mantiene API para evitar roturas si se importa por error.
export default function useTilt(_options = {}, _disabled = false) {
  if (import.meta.env && import.meta.env.DEV) {
    // Using console.warn in dev to signal no-op behavior
    console.warn('[useTilt] La dependencia de tilt fue eliminada; el hook es un no-op.');
  }
  const ref = useRef(null);
  return ref;
}
