import styles from "./Search.module.css";

interface Props {
  onFocus?: () => void;
  onBlur?: () => void;
  searchMode?: boolean;
}

export function Search(props: Props) {
  return (
    <div className={styles.component}>
      <input
        className={styles.input}
        placeholder="search text"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      {props.searchMode && (
        <div className={styles.results}>
          <div className={styles.item}>result 1</div>
          <div className={styles.item}>result 2</div>
          <div className={styles.item}>result 3</div>
          <div className={styles.item}>result 4</div>
        </div>
      )}
    </div>
  );
}
