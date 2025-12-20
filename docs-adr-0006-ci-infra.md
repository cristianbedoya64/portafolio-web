Title: CI infrastructure — runners, caching, secrets and notifications
Date: 2025-12-20T19:49:12.341Z
Status: Accepted

Context
The repository relies on GitHub Actions for CI (lint, test, build, Lighthouse CI and deploy). Clear guidance is needed for runner types, caching policies, secrets handling, artifact retention and notifications.

Decision
1. Use GitHub-hosted runners (`ubuntu-latest`) for the primary CI jobs for simplicity and speed. Consider self-hosted runners only if deterministic environment or special hardware is required.
2. Implement caching for Node modules and LHCI artifacts using `actions/cache` with stable keys (`node-modules-{{ hashFiles('**/package-lock.json') }}`) to speed up installs.
3. Store sensitive values (Plausible domain, LHCI Chrome path, tokens) in GitHub Secrets and access via environment variables in workflows. Never store secrets in repository files.
4. Persist build artifacts (`dist/`, `lhci-reports/*`) using `actions/upload-artifact` and set a retention policy aligned with the release cadence (e.g., 30 days).
5. Notify on pipeline failures via GitHub Notifications; optionally integrate Slack/Teams using an encrypted webhook secret for on-call alerting.
6. Use `concurrency` in workflows to prevent overlapping deployments and add `permissions` least-privilege for actions that require tokens.

Consequences
- Faster builds through caching and fewer cold installs.
- Secrets managed centrally via GitHub Secrets reduces leak risk but requires administrative access governance.
- Notifications help on-call responders; adding external integrations increases attack surface and maintenance.

Operational notes
- Rotate secrets regularly and audit access to repository secrets.
- Monitor cache hit rates; tune cache keys to avoid invalidation storms when `package-lock.json` changes.
- When running Lighthouse CI with a local Chrome, set LHCI_CHROME_PATH via Secrets and use `run-lhci.js` helper to control flags.

Rationale
Balancing developer experience (fast CI) with security (no secrets in repo) and observability (artifact retention + notifications) yields a maintainable CI infra for a small team or single maintainer.

Signed-off-by: Cristian Bedoya
