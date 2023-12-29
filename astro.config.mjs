import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    react({
      include: ['**/islands/react/*'],
    }),
    solid({
      include: ['**/islands/solid/*'],
    }),
  ],
});
