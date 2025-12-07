import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: resolve(__dirname, "resources"),

    publicDir: resolve(__dirname, "resources"),

    server: {
        port: 5173,
    },

    build: {
        outDir: resolve(__dirname, "dist"),
        emptyOutDir: true,
        copyPublicDir: true,
        rollupOptions: {
            input: resolve(__dirname, "resources/index.html"),
        },
    },
});
