/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/DementiaTest_Feb25', // Replace with your repository name if different
  // Explicitly set the output directory to 'out'
  distDir: 'out',
}

export default nextConfig;