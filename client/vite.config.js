import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // In dev, forward /api calls to the Express server
  server: { proxy: { '/api': 'http://localhost:5000' } },
});
