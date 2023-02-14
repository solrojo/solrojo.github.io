import PropTypes from 'prop-types'
import styles from '@/styles/Action.module.css'
import { ActionBtnProps } from '@/components/Action/constants'

const ActionBtn = ({ disabled, withBg, cssClass, onClick, children }: ActionBtnProps) => (
  <button
    type="button"
    className={`${styles.element} ${withBg ? styles.elementWithBg : ''} ${cssClass ? cssClass : ''}`}
    disabled={disabled}
    onClick={() => onClick?.()}
    role="button"
    aria-label={typeof children === 'string' ? children : ''}
  >
    { children }
  </button>
)

ActionBtn.propTypes = {
  disabled: PropTypes.bool,
  withBg: PropTypes.bool,
  hadler: PropTypes.func,
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string
}

export default ActionBtn
