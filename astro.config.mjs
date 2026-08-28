import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: true,
  output: "static",
  trailingSlash: "always"
});
