/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  basePath: '/test', // Add base path for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig

