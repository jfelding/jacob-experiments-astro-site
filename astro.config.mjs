import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import decapCmsOauth from "astro-decap-cms-oauth";
import cloudflare from "@astrojs/cloudflare";

let adapter = cloudflare();


// https://astro.build/config
export default defineConfig({
  site: "https://jacob-experiments.com",
  integrations: [mdx(), sitemap(), tailwind(), decapCmsOauth()],
  output: "hybrid",
  adapter: adapter
});