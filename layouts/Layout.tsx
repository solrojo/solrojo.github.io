import { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Statement from '@/components/Statement'
import { ActionBtn } from '@/components/Action'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isModalVisible, setModalVisibility] = useState(false)

  return (
    <>
      <div className="grid">
        <header className="header">
          <div className="banner">
            <ActionBtn
              onClick={() => setModalVisibility(true)}
              disabled={isModalVisible}
            >
              🇺🇦 Stand with Ukraine 🇺🇦
            </ActionBtn>
          </div>

          <Header />
        </header>

        <main className="main">
          { children }
        </main>
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
