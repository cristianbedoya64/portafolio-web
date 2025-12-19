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
        preset: 'mobile',
        emulatedFormFactor: 'mobile',
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
        budgets: require('./performance-budget.mobile.json'),
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports/mobile',
      reportFilenamePattern: 'lighthouse-mobile-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
