import { Html, Head, Main, NextScript } from 'next/document'

export default () => (
  <Html lang="en">
    <Head>
      <meta name="author" content="Dmitri Korchemkin" />
      <meta name="description" content="Dmitri Korchemkin's website" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* <link rel="preload" as="image" href="/img/bg-mobile.webp" media="(max-width: 480px)" />
      <link rel="preload" as="image" href="/img/bg-desktop.webp" media="(min-width: 481px)" /> */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)
