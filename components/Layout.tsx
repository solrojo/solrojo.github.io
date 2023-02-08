import { ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Statement from '@/components/Statement'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isModalVisible, setModalVisibility] = useState(false)

  return (
    <>
      <div className="grid">
        <header className="header slide-down">
          <Header>
            <button
              type="button"
              onClick={() => setModalVisibility(true)}
              disabled={isModalVisible}
            >
              #standwithukraine
            </button>
          </Header>
        </header>

        <main className="main scale-back">
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
