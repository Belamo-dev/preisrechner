import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://preisrechner-1ie.pages.dev",
  integrations: [sitemap()],
});
