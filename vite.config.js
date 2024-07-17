import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [FullReload(["images/**/*.svg"])],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "docs",
  },
  base: "/01-intro-websites-cedricgeissmann/",
});
