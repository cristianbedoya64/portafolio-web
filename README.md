# Portafolio Web – Cristian Bedoya

Sitio personal construido con Vite + React, animaciones con Framer Motion, i18n y enfoque en accesibilidad y rendimiento. Incluye pruebas unitarias, E2E y CI con Lighthouse (budgets desktop y mobile).

## Instantánea de métricas actuales (build local)

Compilación reciente de producción (gzip aproximado):

- JS de entrada (app): `assets/index-*.js` ≈ 15.9 kB
- CSS principal: `assets/index-*.css` ≈ 8.7 kB
- Vendors (cargan de forma separada cuando se necesitan):
  - React/runtime: `vendor-react-*.js` ≈ 54.9 kB
  - Framer Motion: `vendor-motion-*.js` ≈ 25.7 kB
  - Charts (Recharts): `vendor-charts-*.js` ≈ 61.6 kB (lazy)
  - Partículas (tsparticles): `vendor-particles-*.js` ≈ 56.4 kB (lazy)
- Dashboard charts chunk: `TechTrendsCharts-*.js` ≈ 1.3 kB

Notas de rendimiento:

- LCP candidato: imagen del héroe 208×208 pre-cargada (`<link rel="preload" as="image" href="/profile.webp">`) y servida vía `<picture>` (AVIF/WebP + fallback JPG).
- JS no crítico diferido: dashboard y gráficas se cargan al interactuar (panel abierto); partículas se cargan por intersección en Skills.
- PWA habilitada (service worker precache) y fonts/imágenes optimizadas por script.

Para resultados Lighthouse definitivos, revisa los reportes del CI (desktop y mobile) en los artefactos del job.

## Scripts disponibles

- `npm run dev`: entorno de desarrollo.
- `npm run build`: build de producción.
- `npm run preview`: sirve la build (`dist`) para pruebas manuales.
- `npm run lint`: linting con ESLint.
- `npm run test`: pruebas unitarias con Vitest.
- `npm run e2e`: pruebas end‑to‑end con Playwright.
- `npm run optimize:images`: optimiza imágenes en `public/` y `src/assets/` con `sharp`.
- `npm run audit:lighthouse`: corre Lighthouse CI local con `lighthouserc.cjs` (puedes usar los configs específicos desktop/mobile también).

### Optimización de imágenes

- Optimización general: `npm run optimize:images` (comprensión PNG/JPG/WebP/AVIF manteniendo calidad)).
- Variantes de foto de perfil: `node ./scripts/generate-profile-variants.js`
  - Genera `public/profile.avif`, `public/profile.webp` y `public/profile.jpg` a partir de `public/profile.jpg.jfif`, redimensionadas a 208×208 y optimizadas.
  - Si cambias la foto, ejecuta este script antes de `npm run build`.

### Analytics con Plausible

1. Copia `.env.example` a `.env` y define `VITE_PLAUSIBLE_DOMAIN` (p. ej. `portafolio.cristian.dev`).
2. Reinicia `npm run dev` o reconstruye.
3. `AnalyticsProvider` envía `Pageview` + eventos `Section View` cuando una sección es visible ≥55 % por primera vez.
4. Para self‑host/proxy, define `VITE_PLAUSIBLE_SCRIPT_URL`.

## Auditorías Lighthouse y Budgets

- Configs:
  - Desktop: `lighthouserc.desktop.cjs` + `performance-budget.desktop.json`
  - Mobile: `lighthouserc.mobile.cjs` + `performance-budget.mobile.json`
  - Local (único): `lighthouserc.cjs` (preset móvil y budgets activos)
- En CI se ejecutan dos pasadas (desktop y mobile) y se publican reportes en `lhci-reports/desktop` y `lhci-reports/mobile`.
- Budgets vigilan tamaños/cantidades por tipo de recurso, y timings clave (FCP/LCP/TBT/TTI) para prevenir regresiones.

### Requisitos previos para correr LH local

1. `npm install`
2. Puerto `4173` libre (lo usa `vite preview`).

Si alguna auditoría no pasa, abre los reportes, identifica los hallazgos y ajusta: lazy loading, tamaños de imágenes, contrastes, orden de recursos críticos, etc.

## CI/CD

Workflow: `/.github/workflows/ci.yml`

1. Install → Lint → Test → Build
2. Lighthouse (desktop) y Lighthouse (mobile) con budgets y artefactos de reportes
3. (Opcional) Deploy preview a GitHub Pages en PRs

Artefactos:

- `dist/` (build de producción)
- `lhci-reports/desktop` y `lhci-reports/mobile` (HTML/JSON)

## Decisiones arquitectónicas clave

- React 18 + Vite, división de código por dominios (`sections/`, `components/`, `hooks/`, `contexts/`).
- Accesibilidad: semántica, roles/aria, soporte `prefers-reduced-motion`, foco visible consistente.
- Animaciones con Framer Motion, controladas por contexto de efectos y preferencias del usuario.
- Performance:
  - `<picture>` para la foto del héroe (AVIF/WebP/JPG) + `preload` del WebP.
  - Code splitting: gráficas (Recharts) en `TechTrendsCharts` con import dinámico; partículas (tsparticles) por `lazy` + `IntersectionObserver`.
  - Limpieza de dependencias: se eliminó `vanilla-tilt`; efectos de elevación via CSS/Motion.
  - Budgets Lighthouse (desktop/mobile) y CI con doble pasada.
- PWA con `vite-plugin-pwa` (precache, manifest), lista para hosting estático.
- i18n con `LanguageContext` y traducciones.
- Telemetría opcional con Plausible.

## Desarrollo local

1. `npm install`
2. `npm run dev`
3. Visita `http://localhost:5173` (puerto por defecto de Vite)

## Troubleshooting

- Windows + sharp: si falla la instalación, asegura tener las dependencias nativas (Visual C++ Build Tools) o usa Node LTS.
- Puertos en uso: libera `4173` para `npm run preview` y auditorías locales.
- Si `lhci` marca “flaky” en entornos CI, revisa flags de Chrome y considera aumentar `numberOfRuns` o ajustar throttling.
