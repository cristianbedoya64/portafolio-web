# Portafolio Web – Cristian Bedoya

> 🇪🇸 Portafolio profesional construido como producto real: React 18 + Vite, animaciones con Framer Motion, i18n, PWA, panel de tendencias con datos dinámicos y presupuestos de rendimiento que protegen la experiencia en desktop y mobile.<br>
> 🇬🇧 Professional-grade portfolio engineered like a production app: React 18 + Vite, Framer Motion, i18n, PWA, tech-trends dashboard backed by live data, and Lighthouse budgets to preserve desktop+mobile performance.

**Demo:** https://cristianbedoya64.github.io/portafolio-web/  
**Código:** este repositorio (`portafolio-web`)

## Tabla de contenido / Table of contents
1. [Visión del producto](#1-visión-del-producto--product-vision)
2. [Arquitectura](#2-arquitectura--architecture)
3. [Primeros pasos](#3-primeros-pasos--getting-started)
4. [Calidad y CI](#4-calidad-y-ci--quality-gates--ci)
5. [Performance, accesibilidad e i18n](#5-performance-accesibilidad-e-i18n)
6. [Guía de carpetas](#6-guía-de-carpetas--directory-reference)
7. [Operaciones y despliegue](#7-operaciones-y-despliegue--operations--deployment)
8. [Roadmap y extensión](#8-roadmap-y-extensibilidad--roadmap--extensibility)

---

## 1. Visión del producto / Product vision
- 🇪🇸 Mostrar cómo diseño, mido y opero frontends modernos: contenido bilingüe, foco en reclutadores, storytelling con métricas y paneles interactivos que solo se cargan bajo demanda.
- 🇬🇧 Demonstrate my ability to design, measure, and run modern frontends: bilingual storytelling, recruiter-friendly flows, measurable outcomes, and interactive dashboards that remain performance-safe.

**Principios clave / Key tenets**
1. **Medible**: cada feature nace con KPIs (LCP, TBT, accesibilidad ≥0.95, budgets LH).
2. **Configurable**: los usuarios controlan tema, idioma y efectos avanzados.
3. **Observable**: Plausible + eventos de sección; dashboard indica si usa datos live o fallback.
4. **Sostenible**: scripts para optimizar imágenes, generar variantes y servir `dist` en entornos locales.

---

## 2. Arquitectura / Architecture
- 🇪🇸 Dominios claros: `src/sections` orquesta vistas verticales, `src/components` aloja piezas reutilizables, `src/contexts` provee estado transversal (idioma/efectos), `src/api` abstrae integraciones externas.
- 🇬🇧 Clear domains: vertical sections in `src/sections`, reusable UI in `src/components`, cross-cutting state in `src/contexts`, and external integrations in `src/api`.

**Highlights**
- React 18 + Suspense para cargar secciones pesadas (Projects, AI, Contact) o vendors como Recharts/tsparticles únicamente cuando son visibles.
- Contextos (`LanguageProvider`, `EffectsProvider`) encapsulan preferencias persistidas en `localStorage`.
- `TechTrendsDashboard` combina un servicio backend-less (`fetch` hacia GitHub Search + Arbeitnow) con un fallback deterministicamente probado.
- `vite-plugin-pwa` genera manifiesto y service worker; `vite.config.js` fuerza chunking manual (`vendor-*`, `particles-bg`, `dashboard`) para diagnosticar budgets.
- Animaciones: Framer Motion gobernado por `prefers-reduced-motion` y toggles de efectos; `FloatingStackIcons` y `FloatingWhatsApp` usan IntersectionObserver y motion curves responsables.

---

## 3. Primeros pasos / Getting started
```bash
npm install                    # dependencias (Node 20+ recomendado)
npm run dev                    # servidor en http://localhost:5173
npm run build && npm run preview -- --host --port 4173
```

**Scripts relevantes**

| Script | Propósito |
| --- | --- |
| `npm run lint` | ESLint sobre app, scripts y pruebas. |
| `npm run test` | Vitest (unit + component tests en jsdom). |
| `npm run e2e` | Playwright (`tests/e2e/home.spec.js`, servidor dev autogestionado). |
| `npm run audit:lighthouse` / `npm run lh:*` | Auditorías Lighthouse con budgets (local, desktop, mobile). |
| `npm run optimize:images` & `node scripts/generate-profile-variants.js` | Pipelines de medios con `sharp`. |
| `npm run serve:dist` | Servidor HTTP minimalista para foguear `dist/` respetando `base=/portafolio-web/`. |

---

## 4. Calidad y CI / Quality gates & CI
- 🇪🇸 Workflow `ci.yml`: Install → Lint → Test → Build → Lighthouse desktop → Lighthouse mobile → artefactos (`dist`, `lhci-reports/*`) → auditoría de seguridad (`npm audit --production`). Deploy automático a GitHub Pages para `main` y previews para PRs.
- 🇬🇧 `ci.yml` pipeline: install, lint, unit tests, build, dual Lighthouse runs (desktop/mobile) with budgets, artifacts upload, production dependency audit, and GitHub Pages deploy (main) + preview (PRs).

**Cobertura actual**
- Unit/component tests: Hero, Navbar, Skills y utilidades de idioma cubren toggles, animaciones y accesibilidad básica.
- Playwright smoke garantiza hero visible y título correcto tras `npm run dev`.
- Lighthouse budgets (`performance-budget*.json`) gobiernan tamaño/tiempos (FCP≤2s mobile, LCP≤2.5s mobile, TBT≤150 ms, etc.). Reportes quedan versionados en `lhci-reports/`.

---

## 5. Performance, accesibilidad e i18n
- 🇪🇸 Imagen del héroe optimizada (`<picture>` AVIF/WebP/JPG + `fetchpriority="high"`), particles/dashboard lazy, `requestIdleCallback` para efectos y tsparticles, IntersectionObserver para activar fondos animados. Todos los CTAs tienen foco visible; toggles consideran `aria-pressed` y secciones exponen `aria-label`.
- 🇬🇧 Hero image ships AVIF/WebP/JPG variants with preload, heavy visuals load lazily, `requestIdleCallback` gates side effects, and IO observers turn on animated backgrounds. Focus rings are preserved, toggles expose `aria-pressed`, and sections announce themselves with semantic headings.
- **i18n**: `TRANSLATIONS` contiene ES/EN, `useLanguage()` provee `t(path)` y `toggleLanguage()`. Botón CV descarga archivo correcto por idioma; panel de tendencias internacionaliza títulos, tooltips (Intl.NumberFormat) y estados vacíos.
- **Mediciones** (build local, gzip): `assets/index-*.js` ≈ 15.9 kB, `assets/index-*.css` ≈ 8.7 kB; vendors segregados para React (~55 kB), Motion (~26 kB), Charts (~62 kB lazy), Particles (~56 kB lazy).

---

## 6. Guía de carpetas / Directory reference

| Ruta | Descripción |
| --- | --- |
| `src/App.jsx` | Ensambla Navbar, secciones y gating de efectos (Suspense, IntersectionObserver). |
| `src/components/` | Componentes transversales (Navbar, dashboards, partículas, flujos flotantes). |
| `src/sections/` | Cada vista vertical documentada con su propio README (Hero, About, Skills, Projects, LinkedIn, AI, Contact, Updates, Experience). |
| `src/contexts/` | `LanguageContext` y `EffectsContext`, ambos persistiendo preferencias en `localStorage`. |
| `src/i18n/translations.js` | Fuente única de textos ES/EN. |
| `src/api/trendsService.js` | Integración con GitHub Search + Arbeitnow y datos fallback deterministas. |
| `scripts/` | Utilidades Node (optimización de imágenes, variantes del perfil, Lighthouse remota, server `dist`). |
| `tests/` & `src/tests/` | Playwright E2E + setup Vitest (`setupTests.js`, helpers `renderWithLanguage`). |
| `.github/workflows/ci.yml` | Pipeline descrito arriba. |

Cada carpeta relevante ahora tiene README propio describiendo responsabilidades, dependencias y criterios de aceptación.

---

## 7. Operaciones y despliegue / Operations & deployment
- 🇪🇸 Hosting estático via GitHub Pages (`base=/portafolio-web/`). `vite-plugin-pwa` registra service worker y manifiesto alineado al repositorio remoto (`start_url` = `/portafolio-web/`). `scripts/serve-dist.js` replica el entorno Pages para validaciones locales/lighthouse.
- 🇬🇧 Static hosting on GitHub Pages with the same base path; `serve-dist.js` mirrors that setup locally for audits.
- **Analytics opcionales:** defina `VITE_PLAUSIBLE_DOMAIN` (+ `VITE_PLAUSIBLE_SCRIPT_URL` si hay proxy). `AnalyticsProvider` cola eventos hasta que la librería cargue y envía `Section View` cuando IntersectionObserver detecta ≥55 % de visibilidad.
- **Seguridad:** `npm run audit:security` en CI, dependencias acotadas (sin servidores backend). Plausible y fetch externos usan HTTPS.

---

## 8. Roadmap y extensibilidad / Roadmap & extensibility
- 🇪🇸 Próximos pasos sugeridos: conectar el panel de tendencias a una API interna con caché, ampliar suite Playwright (flows de contacto, cambio de idioma, dashboard) y añadir casos de estudio adicionales con métricas before/after.
- 🇬🇧 Next steps: back the trends dashboard with a cached API, grow Playwright coverage (contact, language toggle, dashboard), and publish more case studies with measured deltas.

Este portafolio sirve como blueprint portable: modular, testeado y con observabilidad lista para producción.
