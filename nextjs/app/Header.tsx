import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { Search } from "./Search";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Logo />
      <Search />
    </div>
  );
}
