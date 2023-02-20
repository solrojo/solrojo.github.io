import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Banner from '@/components/Banner'
import styles from '@/styles/Offline.module.css'

export default () => {
  const [isVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    const handleOnline = () => setVisibility(false)
    const handleOffline = () => setVisibility(true)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
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
