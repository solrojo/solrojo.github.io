import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import styles from "@/styles/Header.module.css";

export default () => (
  <div className={styles.container}>
    <Logo />
    <Menu />
  </div>
);
