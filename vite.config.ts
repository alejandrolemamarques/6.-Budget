import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get repository name from environment variable or extract from package.json
const getRepoName = () => {
    const repoName = process.env.VITE_REPO_NAME;
    if (repoName) return repoName;

    try {
        const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
        // Try to extract repo name from homepage or repository field
        const homepage = packageJson.homepage;
        if (homepage) {
            const match = homepage.match(/\/([^/]+)$/);
            if (match) return match[1];
        }
    } catch {
        // Fallback to default if package.json can't be read
        console.warn("Could not read package.json, using default repo name");
    }

    return "6-Budget";
};

// https://vite.dev/config/
export default defineConfig({
    base: `/${getRepoName()}/`,
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
