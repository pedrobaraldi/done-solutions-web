import { defineConfig } from "vite";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Gera JS/CSS compatível também com iPhones/Androids e navegadores mais antigos (iOS 13+).
    target: ["es2019", "safari13", "ios13", "chrome80", "edge80", "firefox78"],
    cssTarget: ["safari13", "ios13", "chrome80", "edge80", "firefox78"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));