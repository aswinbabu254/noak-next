/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'localhost',
          },
          {
            hostname: "noak-next.vercel.app",
          },
        ],
      },
}

module.exports = nextConfig
