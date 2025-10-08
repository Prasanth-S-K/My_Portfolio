import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to a subfolder, set base:
// base: '/My_Portfolio/'
// For Vercel root domain, you can leave it as '/'
export default defineConfig({
  plugins: [react()],
  base: "./", // important! ensures assets load correctly
});
