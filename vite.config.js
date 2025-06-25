// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/projects/css-sass/modern-art-gallery/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        location: path.resolve(__dirname, 'location.html'),
      }
    }
  }
})
