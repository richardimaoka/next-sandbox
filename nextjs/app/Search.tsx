import styles from "./Search.module.css";

interface Props {}

export function Search(props: Props) {
  return <input className={styles.input} placeholder="search text" />;
}
