import { ActionLinkProps, ActionLinkPropTypes } from '@/components/Action/constants'
import ActionBtn from '@/components/Action/ActionBtn'

const ActionLinkExternal = (props: ActionLinkProps) => (
  <a
    href={props.href}
    target="_blank"
    rel="noreferrer"
  >
  <ActionBtn {...props}>{props.children}</ActionBtn>
</a>
)

ActionLinkExternal.propTypes = ActionLinkPropTypes

export default ActionLinkExternal
