"use client";

import React from "react";
import styles from "./style.module.css";
import { ClientChild } from "./ClientChild";

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
      {arr.length > 5 ? (
        <>
          <div>
            <ClientChild text={`over 5 parent`} />
            <ClientChild text={`over 5 parent`} />
          </div>
        </>
      ) : (
        <>
          <DivWrapper>
            <ClientChild text={`eq to or less than 5`} />
            <ClientChild text={`eq to or less than 5`} />
            <ClientChild text={`eq to or less than 5`} />
          </DivWrapper>
        </>
      )}
    </div>
  );
};
