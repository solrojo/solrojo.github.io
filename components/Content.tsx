import links from '@/constants/links'
import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Content.module.css'

export default () => {
  const link = links.find(el => el.text.toLocaleLowerCase().includes('linkedin'))?.href;

  return (
    <div className={styles.container}>
      <div>
        <p>Greetings, my name is</p>
        <h1>Dmitri Korchemkin</h1>
        <p>I am</p>
        <h2>Front-End developer</h2>

        { link
          ? (
            <p>
              feel free to
              <ActionLinkExternal
                href={link}
                withBg
              >
                Contact Me
              </ActionLinkExternal>
            </p>
          )
          : null
        }
      </div>
    </div>
  )
}
