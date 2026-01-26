import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starwind from 'starwind/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    starwind(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
	vite: {
		plugins: [tailwindcss()],
	},
});
