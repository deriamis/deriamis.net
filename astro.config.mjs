// @ts-check
import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';

import devapps from '@astrojs/db'
import fs from 'fs';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import sentry from '@sentry/astro';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

import critters from 'astro-critters';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: "https://deriamis.net",

  integrations: [react(), partytown(), devapps(), sentry(), sitemap(), astroImageTools, critters(), compress()],

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
      strictPort: true
    },
    plugins: [tailwindcss()]
  }
});