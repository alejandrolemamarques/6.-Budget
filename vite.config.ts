import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get repository name from environment variable or extract from package.json
const getRepoName = () => {
    // First try CI/CD environment variable
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
        console.warn("Could not read package.json, falling back to .env value");
    }

    // Fallback to .env value
    if (!process.env.VITE_REPO_NAME) {
        console.warn("No VITE_REPO_NAME found in .env file");
    }
    return process.env.VITE_REPO_NAME || "";
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
