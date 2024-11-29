import { useState } from "react";
import styles from "./Counter.module.css";

type Props = {
  initialCount: number;
};

function calcInitValue(n: number) {
  return 40 + n;
}

export function Counter(props: Props) {
  const calcedInit = calcInitValue(props.initialCount);

  const [count, setCount] = useState(calcedInit);

  const [prevCount, setPrevCount] = useState(props.initialCount);
  if (prevCount !== props.initialCount) {
    setCount(calcedInit);
    setPrevCount(props.initialCount);
  }

  console.log("Counter initial count", count, props.initialCount);

  return <div className={styles.component}>{count}</div>;
}
