import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import { Montserrat as GoogleFont }from '@next/font/google'
import Script from 'next/script'

const font = GoogleFont({
  weight: '300',
  subsets: ['latin'],
  fallback: ['Helvetica', 'sans-serif']
})

export default ({ Component, pageProps }: AppProps) => (
  <>
    <Script id="google-analytics">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PJLFNXK');
      `}
    </Script>

    <div className={font.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </>
)
