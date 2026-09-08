import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serves this repo from https://whyvishal.github.io/Vishal/, so
// the production build needs that prefix baked into every asset URL. Dev stays
// at "/" so localhost:8080 works normally.
const GITHUB_PAGES_BASE = "/Vishal/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? GITHUB_PAGES_BASE : "/",
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      // Static output for GitHub Pages: prerender the one route to a real
      // index.html instead of building an SSR server, since Pages can only
      // serve files off disk. SPA mode is deliberately off — it emits a
      // contentless _shell.html, and Jekyll on Pages ignores underscore files.
      prerender: { enabled: true },
      pages: [{ path: "/" }],
    }),
    viteReact(),
  ],
}));
