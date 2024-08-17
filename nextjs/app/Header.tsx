import styles from "./Header.module.css";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>logo</div>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
      <div>item4</div>
    </div>
  );
}
