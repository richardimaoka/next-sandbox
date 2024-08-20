"use client";

import { useState } from "react";
import styles from "./Search.module.css";

interface SearchResult {
  id: string;
  name: string;
}

interface Props {}

export function Search(props: Props) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  async function onChange(searchText: string) {
    const response = await fetch(`http://localhost:8080/query=${searchText}`);
    const results = (await response.json()) as SearchResult[];
    setSearchResults(results);
  }

  return (
    <div className={styles.component}>
      <button popoverTarget="search-popover" className={styles.button}>
        search text
      </button>

      <div id="search-popover" className={styles.popover} popover="auto">
        <input
          className={styles.input}
          placeholder="search text"
          autoFocus
          onChange={(e) => console.log(e.target.value)}
        />
        {searchResults.map((r) => (
          <div key={r.id} className={styles.item}>
            {r.name}
          </div>
        ))}
      </div>
    </div>
  );
}
