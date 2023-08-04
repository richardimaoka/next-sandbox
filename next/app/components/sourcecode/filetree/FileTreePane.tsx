import { useState } from "react";
import { source_code_pro } from "../../fonts/fonts";
import { FileTreeComponent } from "./FileTreeComponent";
import { FileTreeHeader } from "./FileTreeHeader";
import styles from "./style.module.css";

export const FileTreePane = (): JSX.Element => {
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div className={styles.pane + " " + source_code_pro.className}>
      <FileTreeHeader
        projectDir="sign-in-with-googlesign-in-withwithwithwith-googlesign-in-with-google"
        isFolded={isFolded}
        onButtonClick={() => {
          setIsFolded(!isFolded);
        }}
      />
      <FileTreeComponent isFolded={isFolded} />
    </div>
  );
};
