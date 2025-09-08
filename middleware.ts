import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { get } from '@vercel/edge-config'
import { type NextRequest, NextResponse } from 'next/server'

import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import countries from '~/lib/countries.json'
import { getIP } from '~/lib/ip'
import { getGeoFromHeaders } from '~/lib/geo'
import { redis } from '~/lib/redis'

export const config = {
  matcher: ['/((?!_next|studio|.*\\..*).*)'],
}

const isPublicRoute = createRouteMatcher([
  '/',
  '/api(.*)',
  '/blog(.*)',
  '/confirm(.*)',
  '/projects',
  '/guestbook',
  '/newsletters(.*)',
  '/about',
  '/rss',
  '/feed',
  '/ama',
])

async function beforeAuthMiddleware(req: NextRequest) {
  const { nextUrl } = req

  const blockedIPs = await get<string[]>('blocked_ips')
  const ip = getIP(req)
  const isApi = nextUrl.pathname.startsWith('/api/')

  if (blockedIPs?.includes(ip)) {
    if (isApi) {
      return NextResponse.json(
        { error: 'You have been blocked.' },
        { status: 403 }
      )
    }

    nextUrl.pathname = '/blocked'
    return NextResponse.rewrite(nextUrl)
  }

  if (nextUrl.pathname === '/blocked') {
    nextUrl.pathname = '/'
    return NextResponse.redirect(nextUrl)
  }

  // 从请求头获取地理信息
  const geo = getGeoFromHeaders(req)

  if (geo && !isApi && env.VERCEL_ENV === 'production') {
    const country = geo.country
    const city = geo.city

    const countryInfo = countries.find((x) => x.cca2 === country)
    if (countryInfo) {
      const flag = countryInfo.flag
      await redis.set(kvKeys.currentVisitor, { country, city, flag })
    }
  }

  return NextResponse.next()
}

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect()

  return beforeAuthMiddleware(req)
})