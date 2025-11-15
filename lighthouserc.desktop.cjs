module.exports = {
  ci: {
    collect: {
      buildCommand: 'npm run build',
      staticDistDir: './dist',
      url: ['/', '/index.html'],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        extraHeaders: JSON.stringify({ 'Accept-Language': 'es-ES' }),
        throttlingMethod: 'simulate',
        chromeFlags: ['--no-sandbox', '--disable-dev-shm-usage'],
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
