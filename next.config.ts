import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // reactCompiler: true, // Removed as it caused config validation errors
    // optimizeCss: true, // Disabled to fix preload mismatch errors
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
