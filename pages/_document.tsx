import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default () => (
  <Html lang="en">
    <Head>
      <meta name="author" content="Dmitrii Korchemkin" />
      <meta name="description" content="Dmitrii Korchemkin's website" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <link rel="preload" as="image" href="/img/bg-mobile.png" media="(max-width: 480px)" />
      <link rel="preload" as="image" href="/img/bg-desktop.png" media="(min-width: 481px)" />

      <Script id="google-analytics">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJLFNXK');
        `}
      </Script>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)
