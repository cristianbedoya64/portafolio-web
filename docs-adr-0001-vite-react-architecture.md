Title: Vite + React app architecture
Date: 2025-12-20T19:40:58Z
Status: Accepted

Context
The project is a modern portfolio requiring fast local iteration, small production bundles and PWA support. The team needs HMR for developer experience and a build pipeline that aligns with Lighthouse budgets.

Decision
Adopt Vite as the build tool with React 18 and code-splitting via dynamic imports. Use `vite-plugin-pwa` for service worker and manifest. Configure manual chunking for vendor splits (react, framer-motion, recharts, tsparticles).

Consequences
- Fast dev server with HMR and smaller initial production bundles.
- Explicit vendor chunking makes budgets measurable but requires maintenance when dependency graph changes.
- PWA capabilities enabled with service worker, requiring assets to be audited for cache size.

Rationale
Vite offers the fastest DX and modern ESM-based builds. The manual chunking maps to existing Lighthouse budgets and lets CI detect regressions.

Signed-off-by: Cristian Bedoya
