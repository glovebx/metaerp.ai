export const emailConfig = {
  from: '1069010@qq.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://metaerp.ai`
      : 'http://localhost:3000',
}
