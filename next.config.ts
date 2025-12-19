import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: 'anonymous', // Helps match preload requests with actual requests
  /* config options here */
  experimental: {
    optimizeCss: false, // Explicitly disabled to fix preload mismatch errors
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@tabler/icons-react', 'framer-motion', 'gsap'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
