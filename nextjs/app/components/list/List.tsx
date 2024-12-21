import styles from "./List.module.css";

type ItemProps = {
  name: string;
  childItems?: ItemProps[];
};

function ListItem(props: ItemProps) {
  return (
    <div className={styles.item}>
      <div>{props.name}</div>
      {props.childItems && <List list={props.childItems} />}
    </div>
  );
}

type Props = {
  list: ItemProps[];
};

export function List(props: Props) {
  return (
    <div className={styles.component}>
      {props.list.map((x) => (
        <ListItem key={x.name} name={x.name} childItems={x.childItems} />
      ))}
    </div>
  );
}
