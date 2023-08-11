"use client";

import React from "react";
import styles from "./style.module.css";
import { ClientChild } from "./ClientChild";

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
      {count > 5 ? (
        <>
          <ClientChild text={`over 5 parent state = ${count}`} />
          <ClientChild text={`over 5 parent state = ${count}`} />
        </>
      ) : (
        <>
          <ClientChild text={`eq to or less than 5, parent state = ${count}`} />
          <ClientChild text={`eq to or less than 5, parent state = ${count}`} />
          <ClientChild text={`eq to or less than 5, parent state = ${count}`} />
        </>
      )}
    </div>
  );
};
