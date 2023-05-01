const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.thethaosh.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
module.exports = nextConfig
