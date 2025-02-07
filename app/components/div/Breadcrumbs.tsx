import { Fragment } from "react";
import styles from "./Breadcrumbs.module.css";

type Props = {
  elements: string[];
};

export function Breadcrumbs(props: Props) {
  return (
    <div className={styles.component}>
      {props.elements.map((x, i) => (
        <Fragment key={i}>
          <div className={styles.element}>{x}</div>
          {i < props.elements.length - 1 && (
            <div className={styles.separator}>&gt;</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
