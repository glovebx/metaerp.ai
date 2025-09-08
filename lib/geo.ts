import { type NextRequest } from 'next/server'

// 从请求头获取地理信息
export function getGeoFromHeaders(req: NextRequest) {
  const country = req.headers.get('x-vercel-ip-country') || 
                 req.headers.get('cf-ipcountry') ||
                 req.headers.get('x-country')
  
  const city = req.headers.get('x-vercel-ip-city') || 
              req.headers.get('x-city')
  
  const region = req.headers.get('x-vercel-ip-region') || 
                req.headers.get('x-region')
  
  return {
    country: country || undefined,
    city: city || undefined,
    region: region || undefined
  }
}