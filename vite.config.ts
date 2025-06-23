import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    componentTagger()
  ],
  base: '/Vishal/',
  server: {
    host: "localhost",
    port: 5173,
  },
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
