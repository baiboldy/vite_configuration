import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],
    envDir: path.resolve(process.cwd(), "src"),
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
    build: {
      sourcemap: !isProd,
    },
    server: {
      port: 8080,
      open: true,
    },
    preview: {
      port: 8081,
      open: true,
    },
  };
});
