import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE lets you host under a sub-path, e.g. "/portfolio/" for GitHub Pages project sites.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: { port: 5173 },
  build: { sourcemap: false, chunkSizeWarningLimit: 700 },
});
