Release checklist

Use this checklist for preparing a release (manual or CI-assisted).

1. Update changelog
- Add a new heading under `CHANGELOG.md` for the release version and date following Keep a Changelog.

2. Bump version
- Update `package.json` version semantically.

3. Run checks
- `npm ci`
- `npm run lint`
- `npm run test`
- `npm run build`
- `npm run audit:security`
- `npm run audit:lighthouse` (desktop + mobile)

4. Create tag and release
- `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
- Push tag and open GitHub release including notes from CHANGELOG.

5. Post-release validation
- Verify GitHub Pages site (if deployed) and Lighthouse reports.
- Smoke-test core flows and verify analytics pipeline (if enabled).

6. Rollback plan
- If regressions found, re-deploy previous `dist` artifact or re-run deploy job from previous tag.
