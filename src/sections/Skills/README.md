# Skills section

## Propósito / Purpose
- 🇪🇸 Mostrar el stack principal con tarjetas expandibles, resaltando niveles, keywords y descripciones accionables.
- 🇬🇧 Showcase the core stack with expandable cards that highlight proficiency, keywords, and actionable descriptions.

## Archivos clave
- `index.jsx`: renderiza la cuadrícula, maneja el estado expandido y carga perezosa de partículas.
- `Skills.css`: estilos para tarjetas, chips y modo reducido (`.reduced-motion`).
- `Skills.test.jsx`: prueba la interacción expandir/colapsar.

## Estado, hooks y efectos
- `useLanguage()` provee `translations.skills.items`.
- `usePrefersReducedMotion()` evita animaciones y partículas cuando corresponde.
- `useState(expandedIndex)` + `sessionStorage` preservan la tarjeta abierta entre navegaciones.
- `ParticlesBackground` se importa con `React.lazy` salvo que `VITE_DISABLE_HEAVY_EFFECTS` sea `true`.

## Accesibilidad
- Cada tarjeta es `role="button"` con `tabIndex=0`, `aria-expanded` y soporte para teclado (Enter/Espacio).
- El contenido colapsado muestra un resumen truncado; el expandido revela la descripción completa, bullets y chips.

## Buenas prácticas al extender
- Mantén el shape `{ name, level, description, keywords[] }` en `translations`.
- Al añadir nuevos efectos, documenta su impacto en TBT y actualiza los budgets si es necesario.
