/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configured for custom domain - basePath is empty
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig