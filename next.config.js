/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/characters',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
}

module.exports = nextConfig
