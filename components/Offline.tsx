import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Banner from '@/components/Banner'
import styles from '@/styles/Offline.module.css'

export default () => {
  const [isVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    const hadleOnline = () => setVisibility(false)
    const hadleOffline = () => setVisibility(true)

    window.addEventListener('online', hadleOnline)
    window.addEventListener('offline', hadleOffline)

    return () => {
      window.removeEventListener('online', hadleOnline)
      window.removeEventListener('offline', hadleOffline)
    }
  }, [])

  return (
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
    >
      <div ref={nodeRef} className={styles.container} data-test-id="offline">
        <Banner>Looks like we&apos;re offline</Banner>
      </div>
    </CSSTransition>
  )
}
