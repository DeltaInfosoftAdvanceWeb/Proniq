import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: 'anonymous',

  // Performance optimizations
  reactStrictMode: true,

  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@tabler/icons-react', 'framer-motion', 'gsap'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Production optimizations
  productionBrowserSourceMaps: false,
};

export default nextConfig;
