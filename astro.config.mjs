// @ts-check

import fs from 'node:fs';
import devapps from '@astrojs/db';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import { astroImageTools } from 'astro-imagetools';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://deriamis.net',

  integrations: [
    react(),
    partytown(),
    devapps(),
    sentry(),
    sitemap(),
    astroImageTools,
    critters(),
    compress(),
  ],

  markdown: {
    gfm: true,
    remarkPlugins: [remarkMath, remarkDirective],
    rehypePlugins: [rehypeMathjax, rehypeKatex],
    shikiConfig: {
      theme: JSON.parse(fs.readFileSync('./code-theme.json', 'utf-8')),
    },
    syntaxHighlight: 'shiki',
  },

  vite: {
    server: {
      strictPort: true,
    },
    plugins: [tailwindcss()],
  },
});
