import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: '', // Replace with your repository name (e.g., '/wealthfarming-app')
  reactStrictMode: true, // Enable strict mode for development
  trailingSlash: true, // Ensure URLs end with a slash for GitHub Pages compatibility
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
};

export default nextConfig;