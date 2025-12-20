Components README

Purpose
- Central place for reusable UI components (Navbar, AnalyticsProvider, ParticlesBackground, TechTrendsCharts).

Conventions
- Each component folder contains `*.jsx`, optional `*.css` and `*.test.jsx`.
- Keep components small, pure and document props in the top of the file or in this README.

Testing
- Use Testing Library + Vitest for unit tests.
- Mock external globals (e.g., `window.plausible`) in `src/tests/setupTests.js`.

Adding a component
1. Create folder `src/components/<Name>` with `index.jsx` or `<Name>.jsx`.
2. Add styles scoped to `.component-name-*`.
3. Add tests and update this README with public API and example usage.
