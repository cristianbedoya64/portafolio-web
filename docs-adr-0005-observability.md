Title: Observability strategy — Plausible vs Self-host
Date: 2025-12-20T19:45:10Z
Status: Accepted

Context
The portfolio aims to capture lightweight analytics (pageviews, section events, CTA clicks) while respecting user privacy and keeping operational overhead low. The app currently includes an `AnalyticsProvider` that loads Plausible if `VITE_PLAUSIBLE_DOMAIN` is set.

Decision
Adopt Plausible (SaaS) as the default analytics provider for the public portfolio, with a documented option and guidance to self-host Plausible or proxy the script when domain/data residency requires it. Instrumentation uses a small set of events: `Pageview`, `Section View`, `Project Link Click`, `WhatsApp Floating Click`, and `CV Download`.

Implementation notes
- `AnalyticsProvider` queues events until the Plausible script is loaded and flushes them on `load`.
- All events should be fired with minimal PII; prefer labels/ids over user-identifying data.
- Provide a `VITE_PLAUSIBLE_SCRIPT_URL` override for self-hosted or proxied script URLs.
- Respect Do Not Track and provide a user toggle to disable analytics in UI (future extension).

Consequences
- Plausible SaaS minimizes maintenance and offers low cost and GDPR-conscious defaults.
- Self-hosting enables full control over data residency and retention, but increases infrastructure/ops burden.
- Events must be designed to avoid PII and aggregated where possible to comply with privacy rules.

Fallback and testing
- If `VITE_PLAUSIBLE_DOMAIN` is undefined, `AnalyticsProvider` is a no-op but still queues events in-memory (for local tests).
- E2E tests should mock `window.plausible` and assert that the provider invokes it with expected event names and props.

Rationale
Plausible balances simplicity, privacy, and observability needs for a public portfolio. Providing documented self-host instructions keeps the option open if requirements change.

Signed-off-by: Cristian Bedoya
