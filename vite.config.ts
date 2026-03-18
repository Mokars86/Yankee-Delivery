import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'Yankee Delivery',
        short_name: 'Yankee App',
        description: 'Yankee Delivery app for customers and merchants',
        theme_color: '#2E9E3A',
        background_color: '#ffffff',
        display: 'standalone',
      }
    })
  ],
})
