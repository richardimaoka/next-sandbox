import styles from "./page.module.css";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <ViewTransition>
        <div>animate me</div>
      </ViewTransition>
    </div>
  );
}
