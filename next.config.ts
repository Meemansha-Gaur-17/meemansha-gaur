import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.topmate.io",
      },
    ],
  },
};

export default nextConfig;
