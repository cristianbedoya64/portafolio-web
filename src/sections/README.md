# Sections directory

> 🇪🇸 Las secciones encapsulan vistas completas (Hero, About, Skills, etc.) y se cargan desde `App.jsx` siguiendo un orden narrativo orientado a reclutadores.<br>
> 🇬🇧 Sections encapsulate full-page slices (Hero, About, Skills, etc.) and are rendered from `App.jsx` in a recruiter-focused narrative order.

## Convenciones / Conventions
1. **Entrada única**: cada carpeta expone `index.jsx` (o `Hero.jsx`) y su `README.md` describe dependencias, estado y criterios de aceptación.
2. **Estilos aislados**: archivos `.css` viven junto a la sección y usan prefijos (`.hero-*`, `.projects-*`) para evitar colisiones globales.
3. **Carga progresiva**: las secciones más pesadas (Projects, LinkedIn, AI, Contact, Updates) se importan con `React.lazy` + `Suspense`. Si añades una sección nueva, evalúa si debe ser lazy y documenta el motivo.
4. **Accesibilidad primero**: cada sección debe poseer `id` único, jerarquía semántica (`h2`/`h3`), foco navegable y textos traducidos vía `useLanguage`.

## Mapa rápido / Quick map

| Sección | Propósito | Entrada | Lazy | Tests |
| --- | --- | --- | --- | --- |
| Hero | Primera impresión, CTAs y toggles globales. | `Hero/Hero.jsx` | No | `Hero/Hero.test.jsx` |
| About | Contexto y cartas temáticas. | `About/index.jsx` | No | N/A |
| Skills | Tarjetas expandibles + partículas opcionales. | `Skills/index.jsx` | No | `Skills/Skills.test.jsx` |
| Projects | Casos de estudio con JSON-LD y CTA instrumentada. | `Projects/index.jsx` | Sí | N/A |
| LinkedIn | Últimos posts públicos. | `LinkedIn/index.jsx` | Sí | N/A |
| AI | Experimentos IA, tarjetas animadas. | `AI/index.jsx` | Sí | N/A |
| Contact | CTA multi canal + descarga de CV contextual. | `Contact/index.jsx` | Sí | N/A |
| Updates | Changelog vivo. | `Updates/index.jsx` | Sí | N/A |
| Experience | Placeholder para futuras experiencias laborales. | `Experience/index.jsx` | N/A | N/A |

## Añadir una sección nueva / Adding a new section
1. Crea carpeta dentro de `src/sections/<Nombre>` con al menos `index.jsx`, `<Nombre>.css` y `README.md`.
2. Importa la sección en `App.jsx`. Decide si será `React.lazy` (usa `Suspense fallback={null}` para mantener TTI bajo).
3. Actualiza este README y el README raíz con un resumen.
4. Si la sección requiere datos externos, abstrae la llamada en `src/api/` y documenta su estrategia de caché/fallback en el README de la sección.
