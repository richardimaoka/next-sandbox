import styles from "./column.module.css";

interface TabProps {
  name: string;
  selected: boolean;
}

export const Tab = ({ name, selected }: TabProps) => {
  return (
    <div className={selected ? styles.tabSelected : styles.tab}>{name}</div>
  );
};
