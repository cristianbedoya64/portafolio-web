Contexts README

Purpose
- Hold cross-cutting application state providers (LanguageProvider, EffectsProvider).

Conventions
- Expose hooks `useX()` for consuming context (e.g., `useLanguage()`).
- Persist lightweight preferences to `localStorage` with safe try/catch.

Adding a context
1. Create `src/contexts/MyContext.jsx` with `Provider` and `useMyContext` hook.
2. Add tests for default values and persistence behavior.
3. Document the context API in this README.
