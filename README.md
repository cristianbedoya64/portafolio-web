# Portafolio Web – Cristian Bedoya

Sitio personal construido con Vite + React, animaciones con framer-motion y theming accesible. Incluye pruebas unitarias, e2e y auditorías automáticas de Lighthouse para mantener la experiencia consistente.

## Scripts disponibles

- `npm run dev`: entorno de desarrollo.
- `npm run build`: build de producción.
- `npm run preview`: sirve la build (`dist`) para pruebas manuales.
- `npm run lint`: linting con ESLint.
- `npm run test`: pruebas unitarias con Vitest.
- `npm run e2e`: pruebas end-to-end con Playwright.
- `npm run audit:lighthouse`: ejecuta Lighthouse CI (requiere `npm install`).
- `npm run audit:lighthouse`: ejecuta Lighthouse CI (requiere `npm install`).

### Analytics con Plausible

1. Copia `.env.example` a `.env` y define `VITE_PLAUSIBLE_DOMAIN` con tu dominio registrado en Plausible (por ejemplo `portafolio.cristian.dev`).
2. Vuelve a iniciar el servidor (`npm run dev`) o reconstruye la app para que Vite exponga la variable.
3. El componente `AnalyticsProvider` cargará el script de Plausible y enviará:
   - `Pageview` al iniciar.
   - Evento `Section View` cada vez que una sección (`hero`, `about`, `skills`, etc.) sea visible ≥55 % por primera vez.
4. Si usas un proxy o self-host de Plausible, define `VITE_PLAUSIBLE_SCRIPT_URL` con la URL del script.

## Auditorías Lighthouse

El comando `npm run audit:lighthouse` levanta la aplicación con `vite preview`, ejecuta Lighthouse (modo escritorio, español) sobre la home y genera reportes HTML/JSON en `lhci-reports/`. Las reglas incluyen umbrales mínimos de Performance ≥ 0.90 y Accessibility ≥ 0.95. Añade `lhci-reports/` al `.gitignore` para evitar subir artefactos pesados.

### Requisitos previos

1. Instalar dependencias (`npm install`).
2. Asegurarse de que no haya otro proceso usando el puerto `4173` (el script lo emplea para `vite preview`).

Si las auditorías fallan, revisa los reportes generados y ajusta la UI/UX (lazy loading, tamaños de imágenes, contrastes, etc.).

## Proceso de build y despliegue

1. **Compilación de producción**: `npm run build` genera la salida optimizada en `dist/`. Antes de compilar ejecuta `npm run optimize:images` para comprimir assets con `sharp`, y luego la build aplica minificación y empaqueta los recursos PWA (`vite-plugin-pwa`).
2. **Verificación local**: `npm run preview -- --port=4173` sirve la build estática. Úsalo junto con `npm run audit:lighthouse` para validar rendimiento/accesibilidad antes de subir cambios.
3. **Despliegue recomendado**:
   - **Vercel / Netlify**: selecciona el repositorio, usa `npm install` + `npm run build` como comandos y sirve la carpeta `dist/`. Ambos soportan actualizaciones automáticas con cada push a `main`.
   - **Static hosting (GitHub Pages, Cloudflare Pages)**: compila localmente y sube el contenido de `dist/`. Asegúrate de configurar el dominio usado en Plausible (`VITE_PLAUSIBLE_DOMAIN`) y en la etiqueta `<link rel="canonical">`.
4. **Post-despliegue**: verifica los siguientes puntos tras cada release:
   - La PWA se instala correctamente (manifest + service worker).
   - Las métricas en Plausible reciben eventos `Section View`.
   - Las auditorías Lighthouse se mantienen dentro de los umbrales definidos en `lighthouserc.cjs`.
