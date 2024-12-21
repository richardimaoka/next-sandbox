import { List } from "./components/list/List";
import styles from "./page.module.css";

export default function Page() {
  const list = ["aaa aa aa a a aa", "b b bb", "cccc"];
  return (
    <div className={styles.component}>
      <List list={list} />
    </div>
  );
}
