# Projects section

## Propósito / Purpose
- 🇪🇸 Presentar casos de estudio con resultados medibles, CTA instrumentadas y blueprint técnicos expandibles.
- 🇬🇧 Present measurable case studies with instrumented CTAs and expandable technical blueprints.

## Archivos clave
- `index.jsx`: renderiza tarjetas, maneja expansión (`expanded` state) y define JSON-LD (`buildJsonLd`).
- `Projects.css`: estilos para tarjetas, badges, chips y modal inline.

## Datos y dependencias
- `useLanguage()` alimenta `translations.projects.cards`.
- Cada `card` puede incluir `highlights`, `outcomes`, `links[]` (con `variant` e íconos) y `buildDetails`.
- `prefetchLink()` crea enlaces `<link rel="prefetch">` al pasar el mouse para mejorar tiempos percibidos.
- `window.plausible` (si está disponible) recibe el evento `Project Link Click`.

## Accesibilidad & SEO
- La lista principal es `<ul role="list">` sin bullets visuales.
- Cada tarjeta es un `<section>` con `aria-labelledby`.
- JSON-LD describe los proyectos como `CreativeWork` para mejorar rich snippets.
- Botones indican si abren pestaña nueva (`target="_blank"` con `rel="noopener noreferrer"`).

## Extender o añadir proyectos
- Modifica `src/i18n/translations.js` manteniendo el shape existente; documenta nuevos campos aquí.
- Si una tarjeta requiere un modal a pantalla completa, considera extraerlo a `src/components`.

## Testing y validaciones
- Validar el JSON-LD con https://validator.schema.org tras cambios estructurales.
- Corre Lighthouse (desktop) para asegurar que la expansión lazy no degrade CLS.
