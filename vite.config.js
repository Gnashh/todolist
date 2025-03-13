import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  },
  server: {
    host: true,
    port: 5173, 
    watch: {usePolling: true,
    }
  },
  preview: {
    host: "0.0.0.0",
    port: 5173,  
  }
});
