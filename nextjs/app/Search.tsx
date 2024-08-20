import styles from "./Search.module.css";

interface Props {}

export function Search(props: Props) {
  return (
    <div className={styles.component}>
      <button popoverTarget="search-popover" className={styles.button}>
        search text
      </button>

      <div id="search-popover" className={styles.popover} popover="auto">
        <input className={styles.input} placeholder="search text" autoFocus />
        <div className={styles.item}>result 1</div>
        <div className={styles.item}>result 2</div>
        <div className={styles.item}>result 3</div>
        <div className={styles.item}>result 4</div>
      </div>
    </div>
  );
}
