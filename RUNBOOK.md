Runbook — Operational runbook (critical flows)

Last updated: 2025-12-20T19:40:58Z

Purpose
This runbook describes operational steps for building, validating, deploying, and rolling back the portfolio application. It targets maintainers and CI operators.

1) Quick recovery checklist (production issue)
- Symptom: site unreachable or failing critical paths (hero, CTAs).
- Check CI artifacts: open `Actions` → latest successful `ci` run → download `dist` artifact.
- Run locally: `node scripts/serve-dist.js --port 4173 --base /portafolio-web/` and validate.
- If the site is down on GitHub Pages, redeploy a previous `dist` artifact via GitHub Pages UI or re-run the `deploy` job from a known-good commit tag.

2) Smoke tests (post-deploy)
- Visit home page: title contains "Cristian" and hero visible.
- Check console for JS errors.
- Run Lighthouse CI reports (artifacts available in `lhci-reports/`) and compare with budgets.

3) Rollback
- Identify the last successful deploy (Actions > deployments). Re-deploy the artifact or create a hotfix branch from that commit and run the `ci` pipeline.

4) Incident triage
- Reproduce locally (serve dist + dev server) and capture logs.
- Capture Lighthouse reports and screenshot evidence.
- Open an incident issue with tags: `incident`, `priority:high`, link to artifacts and steps to reproduce.

5) On-call and contacts
- Primary: Cristian Bedoya (repo owner) — GitHub: @cristianbedoya64
- Email (maintainer): cristian.bedoya@example.com  # TODO: replace with real contact
- Secondary / Escalation: team-oncall@example.com  # TODO: replace with team contact or pager
- Pager / Phone: +57-3XX-XXX-XXXX  # placeholder, remove if not applicable
- Timezone: America/Bogota (UTC-5)
- Last contact update: 2025-12-20T19:49:12.341Z

> NOTE: Update these contacts with real reachable addresses and remove sensitive personal data from public branches if necessary.

6) Monitoring & alerts
- Lighthouse CI alerts are captured via CI status; add additional monitoring if hosted behind CDN or custom domain.

7) Security
- Run `npm run audit:security` in CI; triage critical vulnerabilities immediately.

8) Local validations before PR merge
- `npm run lint`
- `npm run test`
- `npm run build` and verify `assets` sizes against budgets
- `npm run audit:lighthouse` (optional local run)

Notes
- Preserve `VITE_DISABLE_HEAVY_EFFECTS=true` during audit runs to avoid inconsistencies from optional vendors.
