/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://localhost:3000', 'cdn1.ozone.ru', 'warmhold.ru', 'warmhold.ru:3006'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
