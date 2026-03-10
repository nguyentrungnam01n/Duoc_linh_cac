import type { NextConfig } from 'next';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'duoclinhcac-be.onrender.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_BASE}/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${API_BASE}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
