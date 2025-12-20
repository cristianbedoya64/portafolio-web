# Updates section

## Propósito / Purpose
- 🇪🇸 Servir como changelog vivo que resume mejoras recientes (accesibilidad, dashboards, despliegues) para demostrar iteración continua.
- 🇬🇧 Act as a living changelog that showcases recent improvements (accessibility, dashboards, deployments) and continuous iteration.

## Archivos clave
- `index.jsx`: renderiza la lista cronológica usando `t('updates.entries')`.
- `Updates.css`: estilos de línea de tiempo y tarjetas (`.updates-card`).

## Datos y dependencias
- `useLanguage()` obtiene `updates.badge/title/subtitle` y `entries[]` (`{dateLabel, dateTime, title, description}`).
- Cada entrada es un `<li>` con `<article>` + `<time>` para mejorar semántica y SEO.

## Accesibilidad
- `aria-hidden="true"` en el fondo animado para evitar ruido.
- `time` incluye `dateTime` en ISO 8601 cuando está disponible.
- Mantén títulos concisos (<80 caracteres) y descripciones en voz activa orientada a resultados.

## Extensión
- Añade nuevas entradas en `translations` al final del arreglo para preservar orden cronológico (más reciente arriba).
- Considera sincronizar esta sección con analytics (ej.: etiquetar eventos cuando se muestra una entrada con `IntersectionObserver`).
