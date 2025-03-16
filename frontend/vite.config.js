import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are linked correctly when deployed
  build: {
    outDir: "dist", // Ensure the build is outputted to 'dist' folder
  },
});
