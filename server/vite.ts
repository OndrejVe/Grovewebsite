// Vite helpery pro vývoj i produkci
import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import {
  createServer as createViteServer,
  type Server as ViteDevServer
} from "vite";

// jednoduchý logger pro konzoli (používá se i ze server/index.ts)
export function log(message: string, source: "express" | "vite" = "express") {
  const ts = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  // eslint-disable-next-line no-console
  console.log(`[${ts}] [${source}] ${message}`);
}

/**
 * Zapojí Vite v DEV režimu jako middleware.
 * V produkci se tenhle helper nevolá (servíruje se statika z dist/public).
 */
export async function setupVite(app: Express, server?: any) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true
    },
    appType: "custom",
    logLevel: "info"
  });

  app.use(vite.middlewares);

  // šablona index.html v DEV: Vite ji transformuje (HMR, importy atd.)
  app.use(async (req, res, next) => {
    try {
      if (req.method !== "GET") return next();
      if (req.originalUrl !== "/" && !req.originalUrl.startsWith("/index.html")) return next();

      const indexHtmlPath = path.resolve("client", "index.html");
      let html = fs.readFileSync(indexHtmlPath, "utf-8");
      html = await vite.transformIndexHtml(req.originalUrl, html);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      // @ts-ignore - dostupné pouze v DEV
      vite.ssrFixStacktrace?.(e as Error);
      next(e);
    }
  });

  log("Vite dev middlewares attached", "vite");
}

/**
 * Produkční statika – po buildu se servíruje z dist/public
 */
export function serveStatic(app: Express, rootDir = "dist/public") {
  const abs = path.resolve(rootDir);
  app.use(express.static(abs));

  // Fallback pro SPA (podporuje nested routy)
  app.get("*", (_req, res, next) => {
    const indexPath = path.join(abs, "index.html");
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
    return next();
  });

  log(`Serving static from ${abs}`);
}