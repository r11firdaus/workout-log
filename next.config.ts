import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  images: {
    domains: ['www.farminghydroponics.com'], // Replace with your image host domain
  },
};


export default nextConfig;
