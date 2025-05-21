import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.omnia360.cl',  // tu dominio personalizado
  base: '/',
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
