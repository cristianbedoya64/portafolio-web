# AI section

## Propósito / Purpose
- 🇪🇸 Destacar experimentos de Inteligencia Artificial (asistentes, RAG, PR reviewer) con un layout atractivo y CTA externas.
- 🇬🇧 Highlight AI experiments (assistants, RAG, PR reviewer) using an engaging card layout with external CTAs.

## Archivos clave
- `index.jsx`: componente con Framer Motion que anima tarjetas y respeta `prefers-reduced-motion`.
- `AI.css`: estilos para `.ai-card`, grid responsivo y fondo animado.

## Datos y dependencias
- `useLanguage()` obtiene `t('ai.*')`, incluyendo `experiments[]` (`{title, description, tech, link}`).
- `motion.a` permite hover/tap springs cuando `useReducedMotion` lo permite.

## Accesibilidad & UX
- Cada tarjeta usa `target="_blank"` con `rel="noopener noreferrer"`.
- `aria-label` describe “Abrir experimento” + título.
- Fondo animado está encapsulado en CSS y se desactiva mediante la clase `.ai-showcase`.

## Extensión
- Nuevos experimentos se agregan en `src/i18n/translations.js`; procura mantener textos sin jerga excesiva y enlazar a repos/demo reales.
- Si un experimento requiere vídeo u otro medio pesado, evalúa cargarlo lazy y documenta su impacto.
