Hooks README

Purpose
- Reusable hooks live here (`usePrefersReducedMotion`, `useTilt` no-op, `useScrollAnimation`).

Guidelines
- Keep hooks pure and side-effect minimal; use `useEffect` cleanup properly.
- Document expected return values and possible browser fallbacks.

Testing
- Mock `window.matchMedia` and `IntersectionObserver` in `src/tests/setupTests.js`.

Adding a hook
- Add file `src/hooks/useMyHook.js` and export default. Include JSDoc for parameters and return shape.
