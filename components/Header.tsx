import { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <>
      <Logo />
      <div>{ children }</div>
      <Menu />
    </>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
