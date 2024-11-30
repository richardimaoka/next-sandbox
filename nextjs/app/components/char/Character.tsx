import styles from "./Character.module.css";

export function Character() {
  const contents = 45;
  return (
    <div className={styles.component}>
      <span className={styles.stroke}>{contents}</span>
      <span className={styles.bg}>{contents}</span>
      <span className={styles.front}>{contents}</span>
    </div>
  );
}
