
import Image from 'next/image'
import cross from '../public/img/cross.svg'
import styles from '@/styles/CloseIcon.module.css'

export default () => (
  <Image
    src={cross}
    alt="Close menu icon"
    priority
    data-test-id="close-icon"
    className={styles.element}
  />
)
