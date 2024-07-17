import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "docs",
  },
  base: "/01-intro-websites-cedricgeissmann/",
});
