import { resolve } from "path";
import htmlPurge from "vite-plugin-purgecss";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  plugins: [htmlPurge()],
};
