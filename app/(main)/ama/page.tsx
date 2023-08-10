import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './wechat-alex.png'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '我们提供一对一的咨询服务（Ask Me Anything）。目前我们有海水珍珠、彩色宝石（红蓝宝、祖母绿等）及钻石首饰的私人定制业务、原石从斯里兰卡、缅甸、泰国、日本及澳洲等地采购，欧洲留学、经验丰富的资深设计师可以为你解答相关的问题。你也可以直接问我IT技术相关的问题，包括且不限于Python、Android开发、Odoo开发等'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我们可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>彩色宝石（红蓝宝、祖母绿等）</b>
            ：如何鉴定真假，如何辨别等级，证书靠谱吗？会不会开裂？送另一半选红宝石还是蓝宝石？
          </li>
          <li>
            <b>珍珠</b>：海水珠如何鉴定级别，如何解读证书，直播买的货靠谱吗？
          </li>
          <li>
            <b>创业经验</b>
            ：我们经营了一家珠宝工作室，珠宝供应链有哪些坑，各类隐形成本多少，珠宝的网络运营应该如何做？
          </li>
          <li>
            <b>后端开发</b>：你可以问我任何Odoo相关的问题，Python和Android开发也是我的强项
          </li>
          <li>
            <b>其他</b>
            ：我们有丰富的海外生活经验，欧洲、日本或者泰国缅甸，可以问我任何事情。
          </li>
        </ul>
        <p>
          你也可以用日语跟我对话，一起学习提高
        </p>

        <h2>定价</h2>
        <p>我们的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>珠宝类：¥0 - Free</strong>
          </li>
          <li>
            <strong>开发技术类：¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">扫一扫加我wechat好友</span>
          </span>
        </p>
        {/* 
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/calicastle/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p> */}

        {/* <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p> */}
      </article>
    </Container>
  )
}
