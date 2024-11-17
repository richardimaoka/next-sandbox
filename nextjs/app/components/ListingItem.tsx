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
  boundingHeight: number
) {
  console.log(currentRank, nextRank, boundingHeight);
  const rankDiff = nextRank - currentRank;
  if (rankDiff === 0) {
    return undefined;
  }

  const padding = 2;
  const Ydiff = (boundingHeight + padding) * rankDiff;
  const styles = { transform: `translateY(${Ydiff.toFixed(0)}px)` };

  return styles;
}

export function ListingItem(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [boundingHeight, setBoundingHeight] = useState(0);

  console.log("ListingItem height", boundingHeight);

  useEffect(() => {
    if (ref.current) {
      setBoundingHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const style =
    boundingHeight > 0 && props.nextRank
      ? calcStyle(props.rank, props.nextRank, boundingHeight)
      : undefined;

  return (
    <div ref={ref} className={styles.component} style={style}>
      {props.s}
    </div>
  );
}
