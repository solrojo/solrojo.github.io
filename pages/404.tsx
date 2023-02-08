import Head from 'next/head'
import Link from 'next/link';

export default () => (
  <>
    <Head>
      <title>404 page not found</title>
    </Head>

    <div className="t-center">
      <h1>404</h1>
      <Link href="/">
        <button type="button">Go to main page</button>
      </Link>
    </div>
    <div></div>
  </>
)
