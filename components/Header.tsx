import { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import styles from '@/styles/Header.module.css'

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props) => (
  <div className={styles.container}>
    <Logo />
    { children }
    <Menu />
  </div>
)

Header.propTypes = {
  children: PropTypes.node
}

export default Header
