"use client";

import React, { useEffect } from "react";
import styles from "./style.module.css";

interface ClientChildProps {
  text: string;
  doScroll: boolean;
}

export const ClientChild = ({ text, doScroll }: ClientChildProps) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect called", text);
    if (ref.current && doScroll) {
      ref.current.scrollIntoView();
    }
  });

  return (
    <div ref={ref} className={styles.child}>
      <button
        className={styles.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}+
      </button>
      <div>{text}</div>
    </div>
  );
};
