import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://triffoona.com/",
  trailingSlash: "never",
  integrations: [tailwind(), sitemap(), astroImageTools, mdx()]
});