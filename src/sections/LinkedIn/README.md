# LinkedIn section

## Propósito / Purpose
- 🇪🇸 Mostrar publicaciones recientes enfocadas en IA, productividad y aprendizajes para generar confianza con reclutadores.
- 🇬🇧 Surface recent LinkedIn posts focused on AI, productivity, and learnings to build trust with recruiters.

## Archivos clave
- `index.jsx`: lista posts, maneja prefetch de enlaces y dispara analíticas.
- `LinkedIn.css`: define la cuadrícula, tarjetas y efectos hover.

## Datos y dependencias
- `useLanguage()` obtiene `t('linkedin.cards')`, cada entrada con `{title, date, dateTime, description, link}`.
- `prefetchLink` añade `<link rel="prefetch">` cuando el usuario hace hover/focus sobre un post.
- Eventos `LinkedIn Post Click` se envían a Plausible cuando existe `window.plausible`.

## Accesibilidad
- Contenedor `<section id="linkedin">` con fondo animado controlado via CSS.
- Cada card es `<li class="linkedin-card">`; si hay `link`, se usa `<a>` con `target="_blank"` y `rel="noopener noreferrer nofollow"`.
- `formatPostDate` respeta `language` para formatear fechas (Intl.DateTimeFormat).

## Extensión
- Para nuevas fuentes (por ejemplo RSS), encapsula la lógica en `src/api/` y entrega datos normalizados a través de `useLanguage` o props.
- Documenta aquí cualquier cambio en el shape de datos para mantener traducciones sincronizadas.
