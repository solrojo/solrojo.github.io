import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Logo.module.css'
import logo from '../public/img/logo.svg'

export default () => (
  <Link href="/">
    <Image
      src={logo}
      alt="Link to website current address www.kda.name"
      className={styles.image}
      priority
    />
  </Link>
)
