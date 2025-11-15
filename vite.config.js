import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: '/portafolio-web/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'og-image.png'],
      manifest: {
        name: 'Cristian  Portafolio',
        short_name: 'Cristian',
        start_url: '/portafolio-web/',
        display: 'standalone',
        background_color: '#0e0e10',
        theme_color: '#00d9ff',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  build: {
    target: 'es2019',
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('tsparticles')) return 'vendor-particles';
            if (id.includes('recharts')) return 'vendor-charts';
            return 'vendor';
          }
          if (id.includes('src/components/ParticlesBackground')) return 'particles-bg';
          if (id.includes('src/components/TechTrendsDashboard')) return 'dashboard';
          return undefined;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
