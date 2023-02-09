import Head from 'next/head'
import styles from '@/styles/NotFound.module.css'
import { ActionLink } from '@/components/Action'

export default () => (
  <>
    <Head>
      <title>404 Page not found</title>
    </Head>

    <div className={styles.container}>
      <h2>Page not found</h2>
      <ActionLink href="/" withBg>Go to main page</ActionLink>
    </div>
  </>
)
