import styles from "./Header.module.css";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>Logo</div>
      <input className={styles.input} placeholder="search text" />
    </div>
  );
}
