// @ts-check
import { defineConfig, envField } from 'astro/config';

import devapps from '@astrojs/db'
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sentry from '@sentry/astro';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://deriamis.net",

  integrations: [react(), partytown(), devapps(), sentry()],

  vite: {
    plugins: [tailwindcss()]
  }
});