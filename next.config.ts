import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'shamiul.vercel.app',
     
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
     
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    
    ]

  }
};

export default nextConfig;
