/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.kip.pro/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
