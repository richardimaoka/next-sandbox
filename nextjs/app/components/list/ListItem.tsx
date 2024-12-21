import styles from "./ListItem.module.css";

type Props = {
  name: string;
};

export function ListItem(props: Props) {
  return <div className={styles.component}>{props.name}</div>;
}
