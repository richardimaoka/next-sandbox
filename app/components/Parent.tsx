import { ReactNode, useState } from "react";
import { Child } from "./Child";

type Props = {
  children: ReactNode;
};

export function Parent(props: Props) {
  console.log("Parent rendering");

  const [count, setCount] = useState(1);

  function onClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {props.children}
      <button type="button" onClick={onClick}>
        +
      </button>
    </div>
  );
}
