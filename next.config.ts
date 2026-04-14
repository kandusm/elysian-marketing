import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path((?!pricing|privacy|terms|security|_next|images|favicon).*)',
        has: [
          {
            type: 'host',
            value: '(?!localhost).*',
          },
        ],
        destination: 'https://app.elysian.money/:path*',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
