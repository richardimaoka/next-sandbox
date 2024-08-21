"use client";

import styles from "./Search.module.css";

interface Props {}

export function Search(props: Props) {
  return (
    <form className={styles.component}>
      <input className={styles.input} placeholder="search text" />
      <button className={styles.button}>search</button>
    </form>
  );
}
