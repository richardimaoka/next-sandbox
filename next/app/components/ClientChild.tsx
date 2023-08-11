"use client";

import React from "react";
import styles from "./style.module.css";

export const ClientChild = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.child}>
      <button
        className={styles.child}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}+
      </button>
      I am a child
    </div>
  );
};
