"use client";
import { AnglesLeftIcon } from "../../icons/AnglesLeftIcon";
import { AnglesRightIcon } from "../../icons/AnglesRightIcon";
import styles from "./style.module.css";

interface FileTreeHeaderProps {
  isFolded: boolean;
  onButtonClick: () => void;
}

export const FileTreeHeader = ({
  isFolded,
  onButtonClick,
}: FileTreeHeaderProps): JSX.Element => {
  const headerStyle = isFolded
    ? `${styles.treeheader} ${styles.folded}`
    : `${styles.treeheader} ${styles.expanded}`;

  return (
    <div className={headerStyle}>
      <button onClick={onButtonClick}>
        {isFolded ? <AnglesRightIcon /> : <AnglesLeftIcon />}
      </button>
    </div>
  );
};
