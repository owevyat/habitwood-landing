import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Твой будущий адрес на GitHub Pages
  site: 'https://owevyat.github.io',

  // Имя репозитория, в котором лежит лендинг
  base: '/habitwood-landing',

  integrations: [sitemap()],
});