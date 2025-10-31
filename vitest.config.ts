import { defineConfig } from "vitest/config";
import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/shared/lib/test-setup.ts"],
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@features": path.resolve(__dirname, "src/features"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@entities": path.resolve(__dirname, "src/entities"),
    },
  },
});
