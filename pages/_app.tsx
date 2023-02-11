import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/Layout'
import { Montserrat as GoogleFont }from '@next/font/google'

const font = GoogleFont({
  weight: '100',
  subsets: ['latin'],
  fallback: ['Helvetica', 'sans-serif']
})

export default ({ Component, pageProps }: AppProps) => (
  <div className={font.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)
