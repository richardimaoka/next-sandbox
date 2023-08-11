"use client";

import React from "react";
import styles from "./style.module.css";

interface ClientChildProps {
  text: string;
}

export const ClientChild = ({ text }: ClientChildProps) => {
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
      {text}
    </div>
  );
};
