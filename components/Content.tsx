import styles from '@/styles/Content.module.css'
import Image from 'next/image'
import { inmate } from '@/constants/image'

const Content = () => {
  return (
    <div className={styles.content}>
      <section className={styles.contentSection}>
        <article>
          <h1>
            <a
              href="https://u24.gov.ua"
              target="_blank"
              rel="noreferrer"
            >
                Stand with Ukraine
            </a>
          </h1>

          <div className={styles.flag}>
            <span className={styles.statement}></span>
          </div>
        </article>
      </section>

      <section className={styles.contentSection}>
        <Image
          src={inmate}
          alt="Inmate"
          width={300}
          height={300}
          className={styles.image}
        />
      </section>
    </div>
  )
}

export default Content
