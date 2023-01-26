import styles from '@/styles/Content.module.css'
import List from '@/components/List'
import evidence from '@/constants/evidence'

const Content = () => {
  const listsProps = {
    listClass: styles.contentlinks,
    listItemClass: styles.contentlinksItem,
    list: evidence
  }

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
        <article>
          <h2>Evidence of military crimes</h2>
          <List {...listsProps} />
        </article>
      </section>
    </div>
  )
}

export default Content
