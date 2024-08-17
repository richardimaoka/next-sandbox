import styles from "./Header.module.css";
import { Logo } from "./Logo";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Logo />
    </div>
  );
}
