/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
}
console.log('next.config.js', JSON.stringify(module.exports, null, 2))
module.exports = nextConfig
