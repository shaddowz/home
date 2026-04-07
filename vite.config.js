import { defineConfig } from 'vite';

export default defineConfig({
  base: '/home/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.js'],
  },
});
