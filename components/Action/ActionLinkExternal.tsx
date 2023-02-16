import { ActionLinkProps, ActionLinkPropTypes } from '@/components/Action/constants'
import styles from '@/styles/Action.module.css'

const ActionLinkExternal = ({
  href, children, cssClass, withBg, ariaLabel, testId
}: ActionLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`${styles.element} ${withBg ? styles.elementWithBg : ''} ${cssClass ? cssClass : ''}`}
    role="link"
    aria-label={ariaLabel}
    data-test-id={testId}
  >
    {children}
  </a>
)

ActionLinkExternal.propTypes = ActionLinkPropTypes

export default ActionLinkExternal
