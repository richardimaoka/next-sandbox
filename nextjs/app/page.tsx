import { Listing } from "./components/listing/Listing";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Listing />
    </div>
  );
}
