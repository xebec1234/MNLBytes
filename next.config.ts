import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media3.giphy.com",
      },
    ],
  },
};

export default nextConfig;
