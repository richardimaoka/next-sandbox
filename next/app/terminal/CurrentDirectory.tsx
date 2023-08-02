import styles from "./terminal.module.css";
import { DirectoryIcon } from "../icons/DirectoryIcon";
import { source_code_pro } from "../fonts/fonts";

interface CurrentDirectoryProps {
  currentDirectory: string;
}

export const CurrentDirectory = ({
  currentDirectory,
}: CurrentDirectoryProps) => {
  return (
    <div className={styles.currentDir}>
      <DirectoryIcon />
      <span className={source_code_pro.className}>{currentDirectory}</span>
    </div>
  );
};
