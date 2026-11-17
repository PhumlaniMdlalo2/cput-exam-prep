import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'CPUT Exam Prep — Third Year',
        short_name: 'CPUT Exam Prep',
        description:
          'Unified exam prep for CPUT third-year Applications Development Theory, Information Systems and Project Management.',
        theme_color: '#0f6b5c',
        background_color: '#f5f2ea',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: '/index.html',
      },
    }),
  ],
  server: {
    port: 5180,
  },
  preview: {
    port: 5180,
  },
})
