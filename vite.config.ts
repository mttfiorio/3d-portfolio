import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          three: ["three"],
          threeFiber: ["@react-three/fiber", "@react-three/drei"],
          utils: [
            "react-vertical-timeline-component",
            "react-parallax-tilt",
            "framer-motion",
          ],
        },
      },
    },
  },
});
