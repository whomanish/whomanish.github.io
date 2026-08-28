import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: true,
  output: "static",
  site: "https://whomanish.github.io",
  trailingSlash: "always"
});
