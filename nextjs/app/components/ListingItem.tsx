import styles from "./ListingItem.module.css";

interface Props {
  s: string;
  rank: number;
}

export type ListingItemProps = Props;

export function ListingItem(props: Props) {
  return <div className={styles.component}>{props.s}</div>;
}
