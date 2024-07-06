import { ReactNode, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Statement from "@/components/Statement";
import Offline from "@/components/Offline";
import styles from "@/styles/Layout.module.css";
import statement from "@/constants/statement";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isModalVisible, setModalVisibility] = useState(statement.enabled);
  return (
    <>
      <Offline data-test-id="offline" />

      <div className={styles.container} data-test-id="layout">
        <header className={styles.header} data-test-id="layout-header">
          <Header />
        </header>

        <main className={styles.main} data-test-id="layout-main">
          {children}
        </main>

        <footer className={styles.footer} data-test-id="layout-footer"></footer>
      </div>

      <Modal opened={isModalVisible} onClose={() => setModalVisibility(false)}>
        <Statement />
      </Modal>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
