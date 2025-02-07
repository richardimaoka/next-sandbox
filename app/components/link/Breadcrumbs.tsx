import { Fragment } from "react";
import styles from "./Breadcrumbs.module.css";
import Link from "next/link";

type Props = {
  elements: {
    href: string;
    text: string;
  }[];
};

export function Breadcrumbs(props: Props) {
  return (
    <div className={styles.component}>
      {props.elements.map((x, i) => (
        <Fragment key={i}>
          <Link className={styles.element} href={x.href}>
            {x.text}
          </Link>
          {i < props.elements.length - 1 && (
            <div className={styles.separator}>&gt;</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
