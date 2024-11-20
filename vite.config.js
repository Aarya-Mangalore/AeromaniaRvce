import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $icons: '/static/Icons', // Example alias for Icons
    },
  },
  server: {
    strictPort: true, // Ensure consistent port usage
    watch: {
      usePolling: true, // Useful for Docker or VM environments
    },
  },
  build: {
    target: 'esnext', // Target latest JavaScript for better compatibility
    sourcemap: true,  // Enable sourcemaps for debugging
  },
});
