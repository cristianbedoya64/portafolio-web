module.exports = {
  ci: {
    collect: {
      buildCommand: 'npm run build',
      startServerCommand: 'npm run preview -- --host --port 4173',
      startServerReadyPattern: '4173',
      startServerReadyTimeout: 180000,
      url: ['http://localhost:4173/portafolio-web/'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        extraHeaders: JSON.stringify({ 'Accept-Language': 'es-ES' }),
        throttlingMethod: 'simulate',
        chromeFlags: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-software-rasterizer',
          '--user-data-dir=./.lighthouseci/chrome-profile',
        ],
        budgets: require('./performance-budget.desktop.json'),
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        // Defer payload control to budgets; avoid double-fail on informative audit
        'total-byte-weight': 'off',
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports/desktop',
      reportFilenamePattern: 'lighthouse-desktop-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
