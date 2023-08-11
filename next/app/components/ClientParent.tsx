"use client";

import React from "react";
import styles from "./style.module.css";

interface ClientParentProps {
  children: React.ReactNode;
}

export const ClientParent = ({ children }: ClientParentProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.parent}>
      <button
        className={styles.parent}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}+
      </button>
      {children}
    </div>
  );
};
