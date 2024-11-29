import { State } from "./components/state/State";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <State />
    </div>
  );
}
