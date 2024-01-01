import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      "/server": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/server/, ""),
      },
    },
  },
  plugins: [react()],
});
