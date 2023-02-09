import { ActionLinkProps, ActionLinkPropTypes } from '@/components/Action/constants'
import Link from 'next/link'
import ActionBtn from '@/components/Action/ActionBtn'

const ActionLink = (props: ActionLinkProps) => (
  <Link href={props.href}>
    <ActionBtn {...props}>{props.children}</ActionBtn>
  </Link>
)

ActionLink.propTypes = ActionLinkPropTypes

export default ActionLink
