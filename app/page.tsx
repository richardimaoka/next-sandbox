"use client";

import { Parent } from "./components/Parent";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Parent />
    </div>
  );
}
