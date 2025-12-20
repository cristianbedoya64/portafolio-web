Title: Lazy-loading heavy visuals and charts
Date: 2025-12-20T19:40:58Z
Status: Accepted

Context
Heavy third-party libraries (Recharts, tsparticles) inflate bundle sizes and affect LCP/TBT if loaded eagerly.

Decision
Load heavy visuals and charting libraries lazily via `React.lazy` + `Suspense` and gate activation with IntersectionObserver and requestIdleCallback where appropriate. Provide a boolean feature flag `VITE_DISABLE_HEAVY_EFFECTS` to force-disable in CI or for audits.

Consequences
- Initial bundle remains lightweight; heavy vendors are downloaded on demand.
- Slight complexity in dev (testing lazy paths) but measurable gains in performance budgets.
- Need to ensure proper fallbacks and graceful degradation when JS is blocked.

Rationale
User-perceived performance improves when secondary features are loaded after critical paint.

Signed-off-by: Cristian Bedoya
