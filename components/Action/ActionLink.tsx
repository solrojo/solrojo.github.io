import { ActionLinkProps, ActionLinkPropTypes } from '@/components/Action/constants'
import Link from 'next/link'
import styles from '@/styles/Action.module.css'

const ActionLink = ({ href, children, cssClass, withBg }: ActionLinkProps) => (
  <Link
    href={href}
    className={`${styles.element} ${withBg ? styles.elementWithBg : ''} ${cssClass ? cssClass : ''}`}
    role="link"
    aria-label={typeof children === 'string' ? children : ''}
  >
    {children}
  </Link>
)

ActionLink.propTypes = ActionLinkPropTypes

export default ActionLink
