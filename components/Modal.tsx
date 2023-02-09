import { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ActionBtn } from '@/components/Action'
import styles from '@/styles/Modal.module.css'

type Props = {
  opened: boolean
  onClose: Function
  children: ReactNode
}

const Modal = ({ opened, onClose, children }: Props) => {
  const nodeRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={opened}
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
          <div className={styles.header}>
            <ActionBtn onClick={() => onClose()}>
              Close
            </ActionBtn>
          </div>
          <div className={styles.content}>
            { children }
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

Modal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
