import styles from "./Header.module.css";
import Link from "next/link";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search}>
        <button popoverTarget="search-popover" className={styles.button}>
          search text
        </button>
        <div
          id="search-popover"
          className={styles.popover}
          popover="auto"
        >
          a
        </div>
      </div>
    </div>
  );
}
