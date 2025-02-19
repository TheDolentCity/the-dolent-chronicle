// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://thedolentchronicle.com',

  vite: {
    plugins: [mdx(), sitemap(), tailwindcss()]
  },

  integrations: [react()]
});