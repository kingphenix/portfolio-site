/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for optimal Vercel deployment
  images: {
    unoptimized: true, // Required for static export
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Turbopack is enabled via CLI flag --turbopack
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

module.exports = nextConfig;