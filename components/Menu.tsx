import { useState } from 'react'
import links from '@/constants/links'
import List from '@/components/List'
import styles from '@/styles/Menu.module.css'

const Menu = () => {
  const [iVisible, setVisibility] = useState(false)

  const navAttrs = {
    className: `${styles.nav} ${iVisible ? styles.navOpened : ''}`
  }

  const listsProps = {
    list: links,
    listClass: styles.navList,
    listItemClass: styles.navItem
  }

  return (
    <div>
      <button
        type="button"
        className={styles.menuBtn}
        disabled={iVisible}
        onClick={() => setVisibility(true)}
      >
          Menu
        </button>

      <nav {...navAttrs}>
        <div className={styles.navHeader}>
          <button
            type="button"
            onClick={() => setVisibility(false)}
            >
              Close
          </button>
        </div>

        <List {...listsProps} />
      </nav>
    </div>
  )
}

export default Menu
