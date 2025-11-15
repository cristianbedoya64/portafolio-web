## 🇪🇸 Portafolio Web – Cristian Bedoya

Aplicación de portafolio personal construida como si fuera un producto real: React + Vite, animaciones con Framer Motion, i18n, PWA, analíticas opcionales y un enfoque fuerte en accesibilidad, rendimiento y observabilidad.

- **Demo producción:** https://cristianbedoya64.github.io/portafolio-web/
- **Repositorio:** este proyecto (`portafolio-web`)

Este repositorio está pensado para mostrar cómo diseño y ejecuto frontends modernos: rápidos, medibles, accesibles y fáciles de mantener.

---

## 🇬🇧 Portfolio Web – Cristian Bedoya

Personal portfolio app built as a real-world product: React + Vite, Framer Motion animations, i18n, PWA, optional analytics and a strong focus on accessibility, performance and observability.

- **Production demo:** https://cristianbedoya64.github.io/portafolio-web/
- **Repository:** this project (`portafolio-web`)

This repository is meant to showcase how I design and build modern frontends: fast, measurable, accessible and maintainable.

---

## 🇪🇸 Resumen rápido / 🇬🇧 Quick Overview

- **Stack:** React 18, Vite, CSS Modules/archivos CSS, Framer Motion, Recharts (gráficas), Playwright, Vitest, ESLint, Lighthouse CI, `vite-plugin-pwa`.
- **Arquitectura:** secciones por dominio (`src/sections`), componentes reutilizables (`src/components`), hooks (`src/hooks`), contextos (`src/contexts`), i18n centralizado (`src/i18n/translations.js`).
- **Experiencia de usuario:** navegación suave, modo de efectos controlado por el usuario, panel de tendencias tecnológicas con gráficas lazy y contenido bilingüe.
- **Calidad:** tests unitarios (Vitest), E2E (Playwright), linting, CI con builds y auditorías Lighthouse (desktop + mobile) con budgets.
- **Producción:** PWA lista para hosting estático, optimización de imágenes automatizada, analíticas opcionales con Plausible.

---

## 🇪🇸 Para quién es este repo / 🇬🇧 Who is this repo for

- **Hiring managers / Tech leads:** ver cómo aplico buenas prácticas de rendimiento, accesibilidad, i18n y CI en un proyecto pequeño pero completo.
- **Reclutadores no técnicos:** revisar la demo en producción y la sección de casos de estudio para entender el impacto sin entrar en el código.
- **Desarrolladores:** explorar la estructura de carpetas, las decisiones de arquitectura y los scripts para reproducir o extender el proyecto.

---

## 🇪🇸 Cómo revisarlo en 1–5 minutos / 🇬🇧 How to review in 1–5 minutes

**Si tienes 1 minuto / If you have 1 minute**

- Abre la demo en producción y:
  - Cambia de idioma ES/EN.
  - Abre el panel de tendencias tecnológicas (dashboard) y mira las gráficas.
  - Revisa la sensación de velocidad inicial y la legibilidad del contenido.

**Si tienes 5 minutos / If you have 5 minutes**

- Revisa rápidamente:
  - `src/sections/Hero` (estructura del héroe, imagen responsiva, animaciones).
  - `src/components/TechTrendsDashboard.jsx` + `src/components/TechTrendsCharts.jsx` (lazy loading, gráficas, i18n y accesibilidad).
  - `src/i18n/translations.js` (diseño de traducciones y textos reutilizables).
  - `/.github/workflows/ci.yml` + `lighthouserc.*` (pipeline, budgets y auditorías Lighthouse).

---

## 🇪🇸 Caso de estudio breve / 🇬🇧 Short case study

> Nota: las cifras exactas pueden variar según el entorno. Aquí se usa una compilación reciente local como referencia.

**Problema / Problem**

El objetivo era tener un portafolio que no fuera solo una landing estática, sino una aplicación que demostrara buenas prácticas de rendimiento, accesibilidad e internacionalización, con un panel de datos (trends) sin convertir la home en una SPA pesada.

**Acción / Action**

- Separar por dominios (`sections`, `components`, `hooks`, `contexts`) para escalar secciones sin romper la estructura.
- Implementar i18n centralizado con contexto de idioma y traducciones reutilizables.
- Implementar un panel de tendencias (Tech Trends Dashboard) con gráficas (Recharts) cargadas de forma lazy solo cuando el usuario abre el panel.
- Optimizar la imagen del héroe con `picture` (AVIF/WebP + JPG) y `preload` de la variante WebP.
- Añadir budgets de Lighthouse (desktop y mobile) para evitar regresiones de performance en CI.

**Resultados aproximados / Approximate results (build local)**

- JS de entrada (app): `assets/index-*.js` ≈ **15.9 kB** gzip.
- CSS principal: `assets/index-*.css` ≈ **8.7 kB** gzip.
- Vendors separados (solo cuando se necesitan):
  - React/runtime: `vendor-react-*.js` ≈ 54.9 kB.
  - Framer Motion: `vendor-motion-*.js` ≈ 25.7 kB.
  - Charts (Recharts): `vendor-charts-*.js` ≈ 61.6 kB (lazy, solo dashboard).
  - Partículas (tsparticles): `vendor-particles-*.js` ≈ 56.4 kB (lazy, solo en Skills).
- Chunk de gráficas del dashboard: `TechTrendsCharts-*.js` ≈ 1.3 kB.

En entornos reales se espera mantener un **LCP competitivo en mobile** gracias a la imagen optimizada, el code splitting y los budgets vigilando tamaños y timings clave (FCP/LCP/TBT/TTI).

---

## 🇪🇸 Decisiones arquitectónicas / 🇬🇧 Architectural decisions

- **React 18 + Vite:** arranque rápido, HMR en desarrollo y build moderna.
- **Estructura por dominio:** `src/sections`, `src/components`, `src/hooks`, `src/contexts`, `src/i18n`, lo que hace fácil localizar y extender funcionalidad.
- **Accesibilidad:** uso de semántica HTML, roles/aria donde son necesarios, foco visible consistente, soporte para `prefers-reduced-motion` y contraste de color cuidado.
- **Animaciones controladas:** Framer Motion con un contexto de efectos que permite activar/desactivar animaciones según la preferencia del usuario.
- **Performance:**
  - Imagen del héroe con `<picture>` (AVIF/WebP/JPG) y `preload` del WebP.
  - Code splitting: gráficas en `TechTrendsCharts` (import dinámico) y partículas (tsparticles) cargadas bajo demanda.
  - Eliminación de dependencias innecesarias (ej. `vanilla-tilt`) a favor de soluciones nativas/CSS.
  - Budgets de Lighthouse (desktop/mobile) y doble pasada en CI.
- **PWA:** `vite-plugin-pwa` para precache, manifest y compatibilidad con hosting estático.
- **i18n:** contexto de idioma, almacenamiento de preferencia y traducciones centralizadas en `src/i18n/translations.js`.
- **Telemetría (opcional):** integración con Plausible mediante un `AnalyticsProvider` que envía pageviews y eventos de sección.

---

## 🇪🇸 Métricas y auditorías / 🇬🇧 Metrics and audits

### 🇪🇸 Instantánea (build local) / 🇬🇧 Snapshot (local build)

Compilación reciente de producción (gzip aproximado):

- App JS: `assets/index-*.js` ≈ 15.9 kB.
- CSS principal: `assets/index-*.css` ≈ 8.7 kB.
- Vendors y chunks detallados en la sección de caso de estudio.

Para resultados Lighthouse definitivos, se utilizan los reportes generados por Lighthouse CI (desktop y mobile) como artefactos del pipeline.

### 🇪🇸 Lighthouse y Budgets / 🇬🇧 Lighthouse and Budgets

- **Configs:**
  - Desktop: `lighthouserc.desktop.cjs` + `performance-budget.desktop.json`.
  - Mobile: `lighthouserc.mobile.cjs` + `performance-budget.mobile.json`.
  - Local (único): `lighthouserc.cjs` (preset móvil + budgets activos).
- **En CI:** se ejecutan dos pasadas (desktop y mobile) y se publican reportes en `lhci-reports/desktop` y `lhci-reports/mobile`.
- **Budgets:** controlan tamaños/cantidades por tipo de recurso y tiempos clave (FCP/LCP/TBT/TTI) para prevenir regresiones.

Recomendación: al modificar recursos pesados (imágenes, vendors, nuevas features), revisar estos reportes antes de hacer deploy.

---

## 🇪🇸 Tests y CI/CD / 🇬🇧 Tests and CI/CD

### 🇪🇸 Scripts / 🇬🇧 Scripts

- `npm run dev`: entorno de desarrollo / development server.
- `npm run build`: build de producción / production build.
- `npm run preview`: sirve `dist` para pruebas manuales / preview production build.
- `npm run lint`: linting con ESLint.
- `npm run test`: pruebas unitarias con Vitest / unit tests.
- `npm run e2e`: pruebas end‑to‑end con Playwright / E2E tests.
- `npm run optimize:images`: optimiza imágenes en `public/` y `src/assets/` con `sharp`.
- `npm run audit:lighthouse`: corre Lighthouse CI local con `lighthouserc.cjs`.

### 🇪🇸 Cobertura (resumen) / 🇬🇧 Coverage (summary)

- Pruebas unitarias sobre componentes clave (ej. Hero, Skills, Contact, Navbar) y hooks.
- Prueba E2E con Playwright para la home (carga general, navegación y elementos críticos visibles).
- Linting obligatorio en CI antes de build y auditorías Lighthouse.

### 🇪🇸 Pipeline CI/CD / 🇬🇧 CI/CD pipeline

- Workflow principal: `/.github/workflows/ci.yml`.
- Pasos:
  1. Install → Lint → Test → Build.
  2. Lighthouse (desktop) + Lighthouse (mobile) con budgets activos.
  3. Publicación de artefactos: `dist/`, `lhci-reports/desktop`, `lhci-reports/mobile`.
- Opcional: integración con GitHub Pages u otro proveedor (Vercel/Netlify) para previsualizar cambios.

---

## 🇪🇸 Optimización de imágenes / 🇬🇧 Image optimization

- **Optimización general / General optimization:** `npm run optimize:images` (compresión PNG/JPG/WebP/AVIF manteniendo calidad).
- **Foto de perfil / Profile picture:** `node ./scripts/generate-profile-variants.js`
  - Genera `public/profile.avif`, `public/profile.webp` y `public/profile.jpg` a partir de `public/profile.jpg.jfif`, redimensionadas a 208×208 y optimizadas.
  - Si cambias la foto, ejecuta este script antes de `npm run build`.

---

## 🇪🇸 Analytics con Plausible / 🇬🇧 Analytics with Plausible

1. Copia `.env.example` a `.env` y define `VITE_PLAUSIBLE_DOMAIN` (ej. `portafolio.cristian.dev`).
2. Reinicia `npm run dev` o reconstruye la app.
3. `AnalyticsProvider` envía `Pageview` + eventos `Section View` cuando una sección es visible ≥55 % por primera vez.
4. Para self‑host o proxy, define `VITE_PLAUSIBLE_SCRIPT_URL`.

---

## 🇪🇸 Desarrollo local / 🇬🇧 Local development

1. `npm install`
2. `npm run dev`
3. Visita `http://localhost:5173` (puerto por defecto de Vite) / visit `http://localhost:5173`.

---

## 🇪🇸 Troubleshooting / 🇬🇧 Troubleshooting

- **Windows + sharp:** si falla la instalación, asegúrate de tener las dependencias nativas (Visual C++ Build Tools) o usa Node LTS.
- **Puertos en uso / Ports in use:** libera `4173` para `npm run preview` y auditorías locales.
- **Flakiness en Lighthouse CI:** si `lhci` es inestable en CI, revisa flags de Chrome y considera aumentar `numberOfRuns` o ajustar throttling.

---

## 🇪🇸 Próximos pasos sugeridos / 🇬🇧 Suggested next steps

- Añadir más casos de estudio con métricas antes/después.
- Conectar el panel de tendencias a datos reales o a un backend ligero.
- Extender la suite de tests E2E para más flujos de usuario (contacto, cambio de idioma, navegación por proyectos).

Este portafolio está pensado como base sólida para seguir iterando, no como landing estática cerrada.
