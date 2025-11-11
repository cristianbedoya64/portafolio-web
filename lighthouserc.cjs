module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run build && npm run preview -- --port=4173',
      startServerReadyPattern: 'http://localhost:4173',
      startServerReadyTimeout: 120000,
      url: ['http://localhost:4173/'],
      numberOfRuns: 2,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        extraHeaders: JSON.stringify({ 'Accept-Language': 'es-ES' }),
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        'uses-http2': 'off',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports',
      reportFilenamePattern: 'lighthouse-%%DATETIME%%-report.%%EXTENSION%%',
    },
  },
};
