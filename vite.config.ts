import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  root: "./src/pages",
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
  },
  plugins: [tailwindcss()],
});
