import { ReactNode } from 'react'
import PropTypes from 'prop-types'

export type ActionBtnProps = {
  disabled?: boolean
  withBg?: boolean
  onClick?: Function
  children: ReactNode
  cssClass?: string
}

export type ActionLinkProps = {
  href: string
  children: ReactNode
  cssClass?: string
  withBg?: boolean
}

export const ActionLinkPropTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string,
  withBg: PropTypes.bool
}
