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
        <header className="header slide-down">
          <Header>
            <ActionBtn
              onClick={() => setModalVisibility(true)}
              disabled={isModalVisible}
            >
              #standwithukraine
            </ActionBtn>
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
