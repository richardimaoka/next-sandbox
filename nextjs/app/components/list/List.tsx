import styles from "./List.module.css";

type ItemProps = {
  name: string;
};

function ListItem(props: ItemProps) {
  return <div className={styles.item}>{props.name}</div>;
}

type Props = {
  list: ItemProps[];
};

export function List(props: Props) {
  return (
    <div className={styles.component}>
      {props.list.map((x) => (
        <ListItem key={x.name} name={x.name} />
      ))}
    </div>
  );
}
