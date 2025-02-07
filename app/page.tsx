import { Breadcrumbs } from "./components/link/Breadcrumbs";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Breadcrumbs
        elements={[
          { text: "Home", href: "/" },
          { text: "items", href: "/" },
          { text: "new item", href: "/" },
        ]}
      />
    </div>
  );
}
