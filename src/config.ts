// Get the repository name from environment variable or default to '6-Budget'
export const REPO_NAME = import.meta.env.VITE_REPO_NAME || "6-Budget";

// Base URL for the application
export const BASE_URL = `/${REPO_NAME}/`;
