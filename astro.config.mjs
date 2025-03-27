import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; 
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';



export default defineConfig({
  site: 'https://saraquintana.info',
  integrations: [react(), tailwind(), sitemap()], 
});


