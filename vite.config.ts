import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
// https://www.npmjs.com/package/vite-plugin-checker
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
});
