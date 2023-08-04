"use client";
import { AnglesLeftIcon } from "../../icons/AnglesLeftIcon";
import { AnglesRightIcon } from "../../icons/AnglesRightIcon";
import styles from "./style.module.css";

interface FileTreeHeaderProps {
  projectDir?: string;
  isFolded: boolean;
  onButtonClick: () => void;
}

export const FileTreeHeader = ({
  projectDir,
  isFolded,
  onButtonClick,
}: FileTreeHeaderProps): JSX.Element => {
  const headerStyle = isFolded
    ? `${styles.treeheader} ${styles.folded}`
    : `${styles.treeheader} ${styles.expanded}`;

  return (
    <div className={headerStyle}>
      <div className={styles.projectdir}>{projectDir}</div>
      <button onClick={onButtonClick}>
        {isFolded ? <AnglesRightIcon /> : <AnglesLeftIcon />}
      </button>
    </div>
  );
};
