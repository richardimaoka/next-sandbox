"use client";

import { useEffect } from "react";

export function Client() {
  useEffect(() => {
    console.log("Client useEffect called");
    // throw new Error("Client useEffect error");
  });

  throw new Error("Client rendering error");

  return <div className={styles.component}></div>;
}
