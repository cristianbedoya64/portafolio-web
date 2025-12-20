Title: Performance budgets in CI (Lighthouse)
Date: 2025-12-20T19:40:58Z
Status: Accepted

Context
To prevent regressions in perceived performance (LCP, TBT, payload sizes), automated checks are required in CI.

Decision
Enforce Lighthouse CI runs for desktop and mobile with `performance-budget.*.json` defined and `lighthouserc.*.cjs` configs. Set assertions to warn/fail thresholds appropriate to the portfolio product.

Consequences
- CI will surface regressions before merge and deployment.
- Developers must be mindful of added bundles and heavy assets.
- Occasional CI flakiness may require tuning (numberOfRuns, throttlingMethod).

Rationale
Automated budgets provide measurable SLAs for the user experience and prevent unnoticed regressions.

Signed-off-by: Cristian Bedoya
