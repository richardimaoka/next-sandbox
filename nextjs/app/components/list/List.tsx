import styles from "./List.module.css";
import { ListItem } from "./ListItem";

type Props = {
  list: string[];
};

export function List(props: Props) {
  return (
    <div className={styles.component}>
      {props.list.map((x) => (
        <ListItem key={x} name={x} />
      ))}
    </div>
  );
}
