/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['imagedelivery.net']
  },
  experimental: {
    esmExternals: 'loose',
  },
}
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
module.exports = nextConfig
