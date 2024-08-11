import styles from "./Header.module.css";
import Link from "next/link";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>Logo</div>
      <Link className={styles.link} href="/link1">
        link1
      </Link>
      <Link className={styles.link} href="/link2">
        link2
      </Link>
      <Link className={styles.link} href="/link3">
        link3
      </Link>
      <div className={styles.search}>
        <input className={styles.input} placeholder="search text" />
      </div>
      <button className={styles.login}>Log in</button>
    </div>
  );
}
