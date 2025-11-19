/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages with custom domain, set basePath to empty string
  // For GitHub Pages subdirectory (username.github.io/repo), set to '/repo-name'
  basePath: process.env.NODE_ENV === 'production' && process.env.BASE_PATH ? process.env.BASE_PATH : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.BASE_PATH ? process.env.BASE_PATH : '',
}

module.exports = nextConfig

