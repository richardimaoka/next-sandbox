import styles from "./Search.module.css";

interface Props {}

export function Search(props: Props) {
  return (
    <div className={styles.component}>
      <input className={styles.input} placeholder="search text" />
    </div>
  );
}
