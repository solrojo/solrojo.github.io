import { ActionLinkExternal } from '@/components/Action'
import styles from '@/styles/Statement.module.css'

export default () => (
  <div className={styles.container}>
    <div className={styles.image}></div>

    <div className={styles.text}>
      <ActionLinkExternal href="https://u24.gov.ua" cssClass={styles.element}>
        Stand with 🇺🇦Ukraine
      </ActionLinkExternal>
    </div>
  </div>
)
