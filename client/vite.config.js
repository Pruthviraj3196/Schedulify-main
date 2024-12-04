import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 10000,
      proxy: {
        '/api': {
          target: 'https://schedulify-main.onrender.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
