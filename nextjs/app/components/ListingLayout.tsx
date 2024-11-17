import { ListingItem, ListingItemProps } from "./ListingItem";
import styles from "./ListingLayout.module.css";

interface Props {
  items: ListingItemProps[];
}

export function ListingLayout(props: Props) {
  return (
    <div className={styles.component}>
      {props.items.map((i) => (
        <ListingItem key={i.s} s={i.s} rank={i.rank} />
      ))}
    </div>
  );
}
