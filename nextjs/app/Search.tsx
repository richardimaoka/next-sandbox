import styles from "./Search.module.css";

interface Props {}

export function Search(props: Props) {
  return (
    <form className={styles.component} action="/search" method="GET">
      <input name="query" className={styles.input} placeholder="search text" />
      <button type="submit" className={styles.button}>
        search
      </button>
    </form>
  );
}
