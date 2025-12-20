Deployment guide

This document describes how to build and deploy the project in production, and how to validate the built artifacts locally.

Build and preview locally
1. Install dependencies: `npm ci`
2. Build: `npm run build`
3. Preview production build (serves at http://localhost:4173):
   `npm run preview -- --host --port 4173`

Serve dist locally (GitHub Pages base)
- Use `npm run serve:dist` to serve `dist/` honoring `base=/portafolio-web/`.
- Useful for Lighthouse CI local runs and manual QA.

GitHub Pages (current setup)
- CI builds the site and uploads `dist/` as an artifact.
- On pushes to `main` CI publishes `dist/` to GitHub Pages via `actions/deploy-pages`.
- Ensure `vite.config.js` base option matches the Pages path.

Validation & smoke checks
- Run `npm run lint` and `npm run test` before creating a release.
- Run Lighthouse CI (`npm run audit:lighthouse`) or preview and run Lighthouse locally.

Rollbacks and artifacts
- CI stores `dist/` and `lhci-reports/` as artifacts; to rollback, redeploy a previous `dist` artifact or restore from a release tag.

Security
- Run `npm run audit:security` in CI; review vulnerabilities in third-party deps before allowing deploy.
