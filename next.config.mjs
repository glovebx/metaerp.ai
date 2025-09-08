import { get } from '@vercel/edge-config'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: false,
  
  // experimental: {
  //   serverActions: true,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },      
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '**',
      },
    ],     
  },

  async redirects() {
    try {
      return (await get('redirects')) ?? []
    } catch {
      return []
    }
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },
}

export default nextConfig
