import { CurrentDirectory } from "./CurrentDirectory";
import { TerminalContents } from "./TerminalContents";
import styles from "./terminal.module.css";

export const Terminal = () => {
  return (
    <div className={styles.terminal}>
      <CurrentDirectory currentDirectory="my-app" />
      <TerminalContents />
    </div>
  );
};
