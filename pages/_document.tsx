import { Html, Head, Main, NextScript } from 'next/document'
import BodyStat from '@/components/BodyStat'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <BodyStat />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
