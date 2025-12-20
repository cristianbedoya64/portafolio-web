# About section

## Propósito / Purpose
- 🇪🇸 Contextualizar el perfil (trayectoria, foco, filosofía, IA aplicada) mediante bullets y tarjetas temáticas.
- 🇬🇧 Provide narrative context (background, focus, philosophy, applied AI) via bullets and themed cards.

## Archivos clave
- `index.jsx`: componente con Framer Motion para entradas suaves y tarjetas.
- `About.css`: grid responsivo con prefijos `.about-*`.

## Datos y dependencias
- `useLanguage()` suministra `t('about.*')` para título, texto introductorio, bullets y `cards[]`.
- `useReducedMotion()` ajusta animaciones (escala en hover se desactiva cuando el usuario lo solicita).

## Accesibilidad & UX
- La sección expone `id="about"` y estructura semántica (`h2` global + `h4` en tarjetas).
- Bullets usan `ul.about-bullets` para lectura clara; íconos se marcan `aria-hidden`.
- Mantén los bullets traducidos en `src/i18n/translations.js`; evita textos inline.

## Extensión sugerida
- Nuevas tarjetas deben seguir el shape `{ icon, title, bullets[] | description }`.
- Para incorporar métricas cuantitativas, añade badges o subtextos y documenta el cambio aquí.
