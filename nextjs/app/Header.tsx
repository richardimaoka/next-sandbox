"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Search } from "./Search";

interface Props {}

export function Header(props: Props) {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <div
      className={
        styles.component + (searchMode ? " " + styles.searchExpand : "")
      }
    >
      <Logo />
      {!searchMode && <div>item1</div>}
      {!searchMode && <div>item2</div>}
      {!searchMode && <div>item3</div>}
      {!searchMode && <div>item4</div>}
      <Search
        onFocus={() => {
          setSearchMode(true);
        }}
        onBlur={() => {
          setSearchMode(false);
        }}
        searchMode={searchMode}
      />
    </div>
  );
}
