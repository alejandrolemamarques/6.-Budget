import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get repository name from environment variable or default to '6-Budget'
const repoName = process.env.VITE_REPO_NAME || "6-Budget";

// https://vite.dev/config/
export default defineConfig({
    base: `/${repoName}/`,
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
