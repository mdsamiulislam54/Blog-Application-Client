import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'shamiul.vercel.app',
     
      },
    ]

  }
};

export default nextConfig;
