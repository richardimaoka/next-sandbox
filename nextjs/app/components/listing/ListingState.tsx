"use client";

import { useState } from "react";
import { ListingItemProps } from "./ListingItem";
import { ListingLayout } from "./ListingLayout";
import styles from "./ListingState.module.css";

interface Props {
  initialItems: ListingItemProps[];
}

const nextItems = [
  { s: "A", rank: 1 },
  { s: "C", rank: 2 },
  { s: "B", rank: 3 },
];

export function ListingState(props: Props) {
  const [items, setItems] = useState(props.initialItems);

  return (
    <div
      onClick={() => {
        setItems(nextItems);
      }}
    >
      <ListingLayout items={items} />
    </div>
  );
}
