import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://kairicho.github.io',
  base: '/resume',
  build: {
    assets: 'assets'
  }
});
