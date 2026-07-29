/*
 * Filename: index.ts
 * FullPath: apps/CWSP-shared/src/index.ts
 * Change date and time: 08.50.00_29.07.2026
 * Reason for changes: Library entry only — stop shipping a cloned CrossWord SPA/CRX app surface.
 */

/**
 * CWSP-shared library root.
 * WHY: apps import helpers from here; Vite/CRX/PWA packaging belongs to CWSP-shell / CWSP-document / CWSP-crx.
 */
export * from "./shared/index.ts";
