import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          three: ["three"],
          threeFiber: ["@react-three/fiber", "@react-three/drei"],
          landingUtils: ["framer-motion"],
          utils: ["react-vertical-timeline-component"],
        },
      },
    },
  },
});
