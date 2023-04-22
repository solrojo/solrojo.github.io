import styles from '@/styles/Statement.module.css'

const days: number = Math.round((new Date().valueOf()  - new Date(2022, 1, 24).valueOf() ) / 8.64e+7)

const Statement = () => (
  <div className={styles.container}>
    <div className={styles.text} data-test-id="statement-text">{ days }</div>
  </div>
)

export default Statement
