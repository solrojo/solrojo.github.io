import { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import links from '@/constants/links'
import List from '@/components/List'
import { ActionBtn } from '@/components/Action'
import styles from '@/styles/Menu.module.css'

const Menu = () => {
  const [isVisible, setVisibility] = useState(false)
  const [isOpened, setOpen] = useState(false)
  const nodeRef = useRef<HTMLElement>(null);

  const hadleClickOutside = ({ target }: MouseEvent) => {
    if (isOpened && !nodeRef.current?.contains(target as Node)) {
      setVisibility(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', hadleClickOutside);
    return () => window.removeEventListener('click', hadleClickOutside)
  }, [hadleClickOutside])

  return (
    <>
      <ActionBtn
        disabled={isVisible}
        onClick={() => setVisibility(true)}
      >
        Menu
      </ActionBtn>

      <CSSTransition
        nodeRef={nodeRef}
        in={isVisible}
        timeout={300}
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          enterDone: styles.enterDone,
          exit: styles.exit,
          exitActive: styles.exitActive
        }}
        unmountOnExit
        onEntered={() => setOpen(true)}
        onExited={() => setOpen(false)}
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
