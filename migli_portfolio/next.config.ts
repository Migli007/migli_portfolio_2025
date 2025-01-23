import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kpopping.com',
      },
    ],
  },
};

export default nextConfig;
