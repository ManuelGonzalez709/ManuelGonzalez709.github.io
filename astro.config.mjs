import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'ManuelGonzalez709.github.io',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
