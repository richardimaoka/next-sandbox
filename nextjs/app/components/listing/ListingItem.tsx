import { useEffect, useRef, useState } from "react";
import styles from "./ListingItem.module.css";

interface Props {
  s: string;
  rank: number;
  nextRank?: number;
}

export type ListingItemProps = Props;

function calcStyle(
  currentRank: number,
  nextRank: number,
  phase: Phase,
  boundingHeight: number
) {
  const rankDiff = nextRank - currentRank;
  if (rankDiff === 0) {
    return undefined;
  }

  const padding = 2;
  const Ydiff = (boundingHeight + padding) * rankDiff;

  switch (phase) {
    case "init":
      return undefined;
    case "animating":
      return {
        transition: "0.5s transform",
        transform: `translateY(${Ydiff.toFixed(0)}px)`,
      };
  }
}

type Phase = "init" | "animating";

export function ListingItem(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [boundingHeight, setBoundingHeight] = useState(0);
  const [phase, setPhase] = useState<Phase>("init");

  useEffect(() => {
    if (ref.current) {
      setBoundingHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    switch (phase) {
      case "init":
        console.log("phase change - init to animation ready");
        setPhase("animating");
    }
  }, [phase]);

  const style =
    boundingHeight > 0 && props.nextRank
      ? calcStyle(props.rank, props.nextRank, phase, boundingHeight)
      : undefined;

  console.log("ListingItem", phase, props.s, props.rank, props.nextRank, style);

  return (
    <div ref={ref} className={styles.component} style={style}>
      {props.s}
    </div>
  );
}
