import styles from "@/styles/Statement.module.css";

const days: number = Math.round(
  (new Date().valueOf() - new Date(2022, 1, 24).valueOf()) / 8.64e7,
);

const Statement = () => (
  <div className={styles.container}>
    <div className={styles.text} data-test-id="statement-text">
      Day {days} of russian aggression in Ukraine.
    </div>
  </div>
);

export default Statement;
