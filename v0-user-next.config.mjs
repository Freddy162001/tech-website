/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slash for Cloudflare Pages compatibility
  trailingSlash: true,
  // Disable asset prefix which can cause issues
  assetPrefix: '',
  // Ensure all paths work correctly
  basePath: '',
}

export default nextConfig;

