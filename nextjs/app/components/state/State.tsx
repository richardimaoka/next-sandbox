"use client";

import { useState } from "react";
import { Counter } from "./Counter";
import styles from "./State.module.css";

export function State() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.component}>
      <Counter initialCount={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
