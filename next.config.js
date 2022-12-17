/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://localhost:3000', 'cdn1.ozone.ru'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
