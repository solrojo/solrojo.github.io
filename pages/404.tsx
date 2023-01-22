import styles from '@/styles/NotFound.module.css'
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.back}>Go to main page</Link>
      <h1 className={styles.header}>404</h1>
    </div>
  )
}
