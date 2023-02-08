import { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/Modal.module.css'

type Props = {
  opened: boolean
  onClose: Function
  children: ReactNode
}

const Modal = ({ opened, onClose, children }: Props) => (
  <div className={`${styles.modal} ${opened ? styles.modalOpened : ''}` }>
    <div className={styles.modalHeader}>
      <button
        type="button"
        onClick={() => onClose()}
      >
          Close
      </button>
    </div>
    <div className={styles.modalContent}>
      { children }
    </div>
  </div>
)

Modal.propTypes = {
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
