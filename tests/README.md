Tests README

Purpose
- Describe test types and how to run them locally.

Test suites
- Unit & component tests: Vitest (jsdom). Run `npm run test`.
- E2E tests: Playwright. Run `npm run e2e` (server will be started if needed).

Setup
- `src/tests/setupTests.js` configures basic DOM mocks (matchMedia, IntersectionObserver).

Writing tests
- Use `renderWithLanguage` helper to wrap components that depend on `LanguageProvider`.
- Keep tests deterministic and mock network calls in API logic.

CI
- Vitest excludes `tests/e2e/**` via `vitest.config.js`; Playwright is run in CI with a webServer entry.
