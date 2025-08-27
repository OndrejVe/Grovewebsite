// @ts-nocheck

import express, { type Express } from "express";
import { createServer, type ViteDevServer } from "vite";
import path from "path";
import type { Server } from "http";

/** Jednoduchý logger do konzole */
export function log(message: string, source: "express" | "vite" = "express") {
  const t = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`[${t}] [${source}] ${message}`);
}

/**
 * V dev režimu zapne Vite middlewares (HMR). V prod se nepoužije (slouží se z /dist/public).
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true as const,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite: ViteDevServer = await createServer({
    server: serverOptions,
    appType: "custom",
    root: path.resolve(process.cwd(), "client"),
    base: "/",
    build: {
      outDir: "dist/public",
    },
    configFile: false,
    customLogger: {
      hasWarned: false,
      info(message) { log(message, "vite"); },
      warn(message) { log(message, "vite"); },
      error(message) { log(message, "vite"); },
      clearScreen() {},
    } as any,
  });

  app.use(vite.middlewares);
  log("Vite dev server middlewares mounted", "vite");
}

/**
 * V produkci servíruje statiku z /dist/public (výstup Vite buildu).
 */
export function serveStatic(app: Express) {
  const staticDir = path.resolve(process.cwd(), "dist/public");
  app.use(express.static(staticDir, { extensions: ["html"] }));
  log(`Serving static from ${staticDir}`);
}