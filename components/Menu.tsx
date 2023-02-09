import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import links from '@/constants/links'
import List from '@/components/List'
import { ActionBtn } from '@/components/Action'
import styles from '@/styles/Menu.module.css'

const Menu = () => {
  const [iVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null);

  return (
    <>
      <ActionBtn
        disabled={iVisible}
        onClick={() => setVisibility(true)}
      >
        Menu
      </ActionBtn>

      <CSSTransition
        nodeRef={nodeRef}
        in={iVisible}
        timeout={300}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exit: styles.exit,
          exitActive: styles.exitActive
        }}
        unmountOnExit
      >
        <nav ref={nodeRef} className={styles.container}>
          <div className={styles.header}>
            <ActionBtn onClick={() => setVisibility(false)}>
              Close
            </ActionBtn>
          </div>

          <List
            list={links}
            listClass={styles.list}
            listItemClass={styles.item}
          />
        </nav>
      </CSSTransition>
    </>
  )
}

export default Menu
