"use client";

import { useEffect, useRef } from "react";

export function Client() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Client useEffect called");
    // throw new Error("Client useEffect error");

    const divElem = ref.current;
    if (divElem) {
      const handler = () => {
        throw new Error("event handler error");
      };

      divElem.addEventListener("click", handler);
      return () => {
        divElem.removeEventListener("click", handler);
      };
    }
  });

  // throw new Error("Client rendering error");

  return (
    <div
      ref={ref}
      // onClick={() => {
      //   throw new Error("onClick error");
      // }}
    >
      client
    </div>
  );
}
