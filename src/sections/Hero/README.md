# Hero section

## Propósito / Purpose
- 🇪🇸 Introducir a Cristian, destacar el rol “Full-Stack + IA” y dirigir al visitante a proyectos/repositorio mientras celebra la personalización (idioma, tema, efectos).
- 🇬🇧 Introduce Cristian, highlights the “Full-Stack + AI” positioning, and funnels visitors to Projects/GitHub while showcasing personalization (language, theme, effects).

## Archivos clave / Key files
- `Hero.jsx`: componente principal con Framer Motion, control de efectos y animaciones de texto/foto.
- `Hero.css`: estilos scoped (`.hero-*`) para layout responsivo y glow effects.
- `Hero.test.jsx`: asegura que título, CTA y foto estén presentes en ambos idiomas.

## Estado y hooks
- `useLanguage()` para textos y rol alternante (`hero.roles`).
- `useEffects()` + `useReducedMotion()` para habilitar animaciones solo si el usuario lo permite.
- `useState` (`effectsArmed`, `isWide`, `showRoleCycle`) + `requestIdleCallback`/`IntersectionObserver` para activar efectos después del primer scroll/idle.

## Accesibilidad & performance
- `<picture>` sirve `profile.avif/webp/jpg` de 208 px con `fetchpriority="high"` y fallback con iniciales.
- Animaciones respetan `prefers-reduced-motion` y la bandera `VITE_DISABLE_HEAVY_EFFECTS`.
- `aria-live="polite"` para el texto de roles, `sr-only` para nombres, enlaces con descripciones claras.

## Integraciones
- CTA “Ver proyectos” navega a `#projects`; “Ver repositorio” se abre en nueva pestaña con `rel="noopener noreferrer"`.
- `FloatingStackIcons` se inserta justo después del Hero desde `App.jsx` para reforzar la marca tecnológica.

## Pruebas / Testing
- Ejecutar `npm run test -- Hero` valida la presencia de título, CTA y avatar (ver `Hero.test.jsx`).
- Cambios visuales deben acompañarse de una corrida Lighthouse (mobile) para asegurar que el nuevo LCP permanezca ≤2.5 s.
