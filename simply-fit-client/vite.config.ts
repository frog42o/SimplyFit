import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API endpoints to the backend server.
      // Adjust '/api' if your endpoints follow a different pattern.
      '/api': 'http://localhost:8080'
    }
  }
})
