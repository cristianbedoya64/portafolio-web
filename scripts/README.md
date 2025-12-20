Scripts README

Purpose
- Describe repository scripts under `scripts/` used in build, audits and image processing.

Files
- `generate-profile-variants.js`: creates profile.avif/webp/jpg from a .jfif source.
- `optimize-images.js`: bulk image compression using `sharp`.
- `run-lhci.js`: helper to run Lighthouse CI using a headless Chrome instance.
- `serve-dist.js`: lightweight static server to preview `dist/` with `base` support.

Usage
- Scripts are used by npm scripts in `package.json`. Run them with `node scripts/<name>.js` or `npm run <script>`.

Testing
- Scripts that mutate files should be run on CI agents with proper environment and permissions.
