import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Statement.module.css'

export default () => (
  <div className={styles.container}>
    <div className={styles.text}>
      <p className={styles.element}>Stand with Ukraine</p>
      <ActionLinkExternal href="https://u24.gov.ua" withBg>u24.gov.ua</ActionLinkExternal>
    </div>

    <div className={styles.image}></div>
  </div>
)
