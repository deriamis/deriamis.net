import db from '@astrojs/db';
import node from '@astrojs/node';
import devApps from '@studiocms/devapps';
import { defineConfig } from 'astro/config';
import studioCMS from 'studiocms';

import vtbot from 'astro-vtbot';

import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://deriamis.net',
  output: 'server',
  adapter: node({ mode: 'standalone' }),

  security: {
    checkOrigin: true,
  },

  integrations: [
    db(),
    studioCMS(),
    devApps(),
    vtbot(),
    react(),
    partytown(),
    sentry({
      project: "deriamisnet",
      org: "ryan-egesdahl-3v",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
