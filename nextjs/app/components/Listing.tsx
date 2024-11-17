import styles from "./Listing.module.css";
import { ListingState } from "./ListingState";

export function Listing() {
  const items = [
    { s: "A", rank: 1 },
    { s: "B", rank: 2, nextRank: 3 },
    { s: "C", rank: 3, nextRank: 2 },
  ];

  return (
    <div className={styles.component}>
      <ListingState initialItems={items} />
    </div>
  );
}
