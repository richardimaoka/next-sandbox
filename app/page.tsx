import styles from "./page.module.css";

import { InputChildrenDiffName } from "./InputChildrenDiffName";
import { InputChildrenSameName } from "./InputChildrenSameName";
import { InputComboControlled } from "./InputComboControlled";
import { InputComboUnControlled } from "./InputComboUnControlled";

export default function Home() {
  return (
    <div className={styles.container}>
      <InputComboControlled />
      <InputComboUnControlled />
      <InputChildrenSameName />
      <InputChildrenDiffName />
    </div>
  );
}
