import { type NextRequest } from 'next/server'

export function getIP(request: Request | NextRequest): string {
  // if ('ip' in request && request.ip) {
  //   return request.ip
  // }

  // const xff = request.headers.get('x-forwarded-for')
  // if (xff === '::1') {
  //   return '127.0.0.1'
  // }

  // return xff?.split(',')?.[0] ?? '127.0.0.1'
  
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  const trueClientIP = request.headers.get('true-client-ip')
  
  // 优先使用 x-forwarded-for 中的第一个 IP
  if (forwarded) {
    return forwarded.split(/, /)[0] ?? ''
  }
  
  //  fallback 到其他常用头字段
  return cfConnectingIP || trueClientIP || realIP || 'unknown'  
}
