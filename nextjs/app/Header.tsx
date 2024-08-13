import styles from "./Header.module.css";
import { Search } from "./Search";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>Logo</div>
      <Search />
    </div>
  );
}
