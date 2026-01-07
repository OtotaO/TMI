import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'index-[hash].js',
        chunkFileNames: 'index-[hash].js',
        assetFileNames: 'index-[hash].[ext]'
      }
    }
  }
})
