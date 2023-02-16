import { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import links from '@/constants/links'
import List from '@/components/List'
import { ActionBtn } from '@/components/Action'
import styles from '@/styles/Menu.module.css'
import Image from 'next/image'
import burger from '../public/img/burger.svg'
import CloseIcon from '@/components/CloseIcon'

const Menu = () => {
  const [isVisible, setVisibility] = useState(false)
  const [isOpened, setOpen] = useState(false)
  const nodeRef = useRef<HTMLElement>(null)


  useEffect(() => {
    const hadleClickOutside = ({ target }: MouseEvent) => {
      if (isOpened && !nodeRef.current?.contains(target as Node)) {
        setVisibility(false)
      }
    }

    window.addEventListener('click', hadleClickOutside)
    return () => window.removeEventListener('click', hadleClickOutside)
  }, [isOpened])

  return (
    <>
      <ActionBtn
        disabled={isVisible}
        onClick={() => setVisibility(true)}
        ariaLabel="Open menu"
        testId="open-menu"
      >
        <Image
          src={burger}
          alt="Menu icon"
          priority
          width={46}
          height={46}
          data-test-id="burger-icon"
        />
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
        <nav
          ref={nodeRef}
          className={styles.container}
          aria-label="Menu"
          data-test-id="menu"
        >
          <div className={styles.header}>
            <ActionBtn
              onClick={() => setVisibility(false)}
              ariaLabel="Close menu"
              testId="close-menu"
            >
              <CloseIcon />
            </ActionBtn>
          </div>

          <List
            list={links}
            listClass={styles.list}
            listItemClass={styles.item}
            listRole="menu"
            itemRole="menuitem"
          />
        </nav>
      </CSSTransition>
    </>
  )
}

export default Menu
