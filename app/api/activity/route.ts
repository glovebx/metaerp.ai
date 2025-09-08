import { Ratelimit } from '@upstash/ratelimit'
import { type NextRequest, NextResponse } from 'next/server'

import { getIP } from '~/lib/ip'
import { redis } from '~/lib/redis'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '5 s'),
    analytics: true,
  })
  const ip = getIP(req)
  const { success } = await ratelimit.limit('activity:app' + `_${ip}`)
  if (!success) {
    return new Response('Too Many Requests', {
      status: 429,
    })
  }

  const app = await redis.get('activity:app')

  return NextResponse.json({
    app,
  })
}
