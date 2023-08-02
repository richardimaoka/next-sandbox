import { Terminal } from "../terminal/Terminal";
import { Tab } from "./Tab";
import styles from "./column.module.css";

export const Column = () => {
  return (
    <div>
      <Tab name="Terminal" selected={true} />
      <div className={styles.terminal}>
        <Terminal />
      </div>
    </div>
  );
};
