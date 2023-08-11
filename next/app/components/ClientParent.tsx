"use client";

import React from "react";
import styles from "./style.module.css";
import { ClientChild } from "./ClientChild";
import Link from "next/link";

const DivWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
interface ClientParentProps {
  children?: React.ReactNode;
}

export const ClientParent = ({ children }: ClientParentProps) => {
  const [arr, setArr] = React.useState<number[]>([]);

  return (
    <div className={styles.parent}>
      <div>{JSON.stringify(arr)}</div>
      <button
        className={styles.parent}
        onClick={() => {
          const copied = [...arr];
          copied.push(arr.length);
          setArr(copied);
        }}
      >
        +
      </button>
      <div>
        {/* {arr.map((n) => (
          <ClientChild key={n} text={`${n}`} doScroll={n === arr.length - 1} />
        ))} */}
        <ClientChild text={`${1}`} doScroll={false} />
        <ClientChild text={`${3}`} doScroll={false} />
      </div>
      <Link href={`/?count=${arr.length}`}>
        <button className={styles.button}>+</button>
      </Link>
    </div>
  );
};
