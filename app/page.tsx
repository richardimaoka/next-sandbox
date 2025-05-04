"use client";

import { Child } from "./components/Child";
import { Parent } from "./components/Parent";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}
