import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Logo.module.css'

export default () => (
  <Link href="/" className={styles.container}>
    <Image
      src="/img/kda.name.svg"
      alt="kda.name"
      width={150}
      height={20}
    />
  </Link>
)
