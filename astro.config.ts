// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://colclark.net",
  adapter: cloudflare(),
  integrations: [markdoc(), sitemap()],
  session: {
    // Site does not use sessions. Null driver prevents the Cloudflare adapter
    // from injecting the KV session driver, which imports miniflare and inflates
    // the Worker bundle by ~21 MB. See: github.com/withastro/astro/issues/15802
    driver: "unstorage/drivers/null",
  },
});
