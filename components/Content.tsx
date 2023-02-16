import links from '@/constants/links'
import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Content.module.css'
// import Image from 'next/image'
// import face from '../public/img/face.webp'

export default () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p>Hi, my name is</p>
      <h1>Dmitri Korchemkin</h1>

      <p>
        I&apos;m <mark>Front-End developer</mark>
      </p>

      <p>
        feel free to
        <span className={styles.actionContainer}>
          <ActionLinkExternal
            href={links[0].href}
            withBg
            ariaLabel="Contact me link"
            testId="contact-me"
          >
            Contact Me
          </ActionLinkExternal>
        </span>
      </p>
    </div>

    <div className={styles.imageContainer}>
      {/* <Image
        className={styles.image}
        src={face}
        alt="Photo of Dmitri Korchemkin"
        priority
        data-test-id="portrait"
      /> */}
    </div>
  </div>
)
