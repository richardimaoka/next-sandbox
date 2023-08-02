import { Terminal } from "../terminal/Terminal";
import { Header } from "./Header";
import styles from "./column.module.css";

export const Column = () => {
  const tabs = ["Terminal", "Source Code", "Browser", "Dev Tools"];
  return (
    <div>
      <Header names={tabs} selected={"Terminal"} />
      <div className={styles.terminal}>
        <Terminal />
      </div>
    </div>
  );
};
