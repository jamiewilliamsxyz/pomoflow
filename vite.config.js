import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "./index.html"),
        background: resolve(__dirname, "./src/background.js"),
      },
      output: {
        entryFileNames: `[name].js`,
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
