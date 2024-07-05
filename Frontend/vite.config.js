import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // Add React plugin if not already included
    // Add other plugins as needed
  ],
  resolve: {
    // Ensure .js and .jsx files are resolved
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },
  build: {
    // Specify the entry file
    build: {
      rollupOptions: {
        input: 'index.html',
      },
    },
  },
  server: {
    proxy: {
      // Proxy API requests that start with /api
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // No rewrite needed, /api remains /api
      },
    },
  },
});
