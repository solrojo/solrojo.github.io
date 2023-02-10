import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Banner from '@/components/Banner'
import styles from '@/styles/Offline.module.css'

export default () => {
  const [iVisible, setVisibility] = useState(false)
  const nodeRef = useRef(null);

  const hadleOffline = () => setVisibility(true)
  const hadleOnline = () => setVisibility(false)

  useEffect(() => {
    window.addEventListener('offline', hadleOffline);
    return () => window.removeEventListener('offline', hadleOffline)
  }, [hadleOffline]);

  useEffect(() => {
    window.addEventListener('online', hadleOnline);
    return () => window.removeEventListener('online', hadleOnline)
  }, [hadleOnline]);


  return (
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
      <div ref={nodeRef} className={styles.container}>
        <Banner>Looks like we're offline</Banner>
      </div>
    </CSSTransition>
  )
}
