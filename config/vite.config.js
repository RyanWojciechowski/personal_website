import { defineConfig } from 'vite'

export default defineConfig({
  base: '/PersonalWebsite/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['aos', 'particles.js']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
