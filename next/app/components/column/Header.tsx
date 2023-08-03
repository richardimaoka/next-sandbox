import { Tab } from "./Tab";
import { ToInitialStepButton } from "./ToInitialStepButton";
import styles from "./column.module.css";

interface HeaderProps {
  names: string[];
  selected: string;
}

export const Header = ({ names, selected }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.tabs}>
        {names.map((name) => (
          <Tab key={name} name={name} selected={name === selected} />
        ))}
      </div>
      <ToInitialStepButton />
    </div>
  );
};
