import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    name: packageJson.name,
    globals: true,
    environment: "jsdom",
    setupFiles: "src/plugin/setup.ts",
    coverage: {
      provider: "istanbul",
      include: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],
      exclude: ["src/types/**/*"],
    },
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
