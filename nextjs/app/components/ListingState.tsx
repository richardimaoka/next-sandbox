import { ListingItemProps } from "./ListingItem";
import { ListingLayout } from "./ListingLayout";
import styles from "./ListingState.module.css";

interface Props {
  initialItems: ListingItemProps[];
}

export function ListingState(props: Props) {
  return <ListingLayout items={props.initialItems} />;
}
