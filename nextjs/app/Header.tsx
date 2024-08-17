import styles from "./Header.module.css";
import { Logo } from "./Logo";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <Logo />
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
      <input className={styles.input} placeholder="search text" />
    </div>
  );
}
