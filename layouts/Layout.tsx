import { ReactNode, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Statement from '@/components/Statement'
import Offline from '@/components/Offline'
import { ActionBtn } from '@/components/Action'
import Banner from '@/components/Banner'
import styles from '@/styles/Layout.module.css'
import statement from '@/constants/statement'
import { StatementLangObject } from '@/constants/types'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isModalVisible, setModalVisibility] = useState(false)
  const [statementData, setStatementData] = useState<StatementLangObject>(statement.en)

  useEffect(() => {
    if (/ru/.test(window.navigator.language)) {
      setStatementData(statement.ru)
    }
  }, [])

  return (
    <>
      <Offline data-test-id="offline" />

      <div className={styles.container}  data-test-id="layout">
        <header className={styles.header} data-test-id="layout-header">
          <Banner cssClass={styles.banner}>
            <ActionBtn
              onClick={() => setModalVisibility(true)}
              disabled={isModalVisible}
              ariaLabel="Open modal"
              testId="open-modal"
            >
              {statementData.title}
            </ActionBtn>
          </Banner>
          <Header />
        </header>

        <main className={styles.main} data-test-id="layout-main">
          { children }
        </main>

        <footer className={styles.footer}  data-test-id="layout-footer"></footer>
      </div>

      <Modal
        opened={isModalVisible}
        onClose={() => setModalVisibility(false)}
      >
        <Statement data={statementData}/>
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
