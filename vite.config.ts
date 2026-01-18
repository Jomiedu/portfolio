import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // GitHub Pages will serve from /portfolio/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
