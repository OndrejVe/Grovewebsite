import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config for Cloudflare Pages (Root = client)
// Output matches CF setting: dist/public
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist/public",
    sourcemap: false,
    emptyOutDir: true,
  },
});
