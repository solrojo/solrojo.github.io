import links from '@/constants/links'
import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Content.module.css'
// import Image from 'next/image'
// import face from '../public/img/face.jpg'

export default () => {
  const link = links.find(el => el.text.toLocaleLowerCase().includes('linkedin'))?.href

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Greetings, my name is</p>
        <h1>Dmitri Korchemkin</h1>
        <p>I am</p>
        <h2>Front-End developer</h2>

        { link
          ? (
            <p>
              feel free to
              <span className={styles.actionContainer}>
                <ActionLinkExternal
                  href={link}
                  withBg
                  cssClass={styles.action}
                  ariaLabel="Contact me link"
                  testId="contact-me"
                >
                  Contact Me
                </ActionLinkExternal>
              </span>
            </p>
          )
          : null
        }
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
}
