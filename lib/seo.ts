export const seo = {
  title: 'Alex(aka 超级Odoo) | 开发者、珠宝鉴定师',
  description:
    '我是Alex，独立开发者，珠宝鉴定师，目前合伙经营一家珠宝工作室。编码不辍、勤学不倦，用输出对抗无力，以旺盛的好奇心驱动生活',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://metaerp.ai'
      : 'http://localhost:3000'
  ),
} as const
