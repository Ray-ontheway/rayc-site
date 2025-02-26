import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? 'https://ihs.rayc.top' : undefined,
  images: {
    domains: ['ihs.rayc.top'],
  },
};

export default nextConfig;
