import { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Statement from '@/components/Statement'
import Offline from '@/components/Offline'
import { ActionBtn } from '@/components/Action'
import Banner from '@/components/Banner'
import styles from '@/styles/Layout.module.css'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isModalVisible, setModalVisibility] = useState(false)

  return (
    <>
      <Offline />

      <div className={styles.container}>
        <header className={styles.header}>
          <Banner cssClass={styles.banner}>
            <ActionBtn
              onClick={() => setModalVisibility(true)}
              disabled={isModalVisible}
            >
              🇺🇦 Stand with Ukraine 🇺🇦
            </ActionBtn>
          </Banner>
          <Header />
        </header>

        <main className={styles.main}>
          { children }
        </main>

        <footer className={styles.footer}></footer>
      </div>

      <Modal
        opened={isModalVisible}
        onClose={() => setModalVisibility(false)}
      >
        <Statement />
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
