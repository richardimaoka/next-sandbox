import { FileNodeIcon } from "./FileNodeIcon";
import Link from "next/link";
import styles from "./style.module.css";

export interface FileNodeComponentProps {
  nodeType: "FILE" | "DIRECTORY";
  name: string;
  filePath: string;
  offset: number;
  isUpdated: boolean;
  currentDirectory?: string;
  step: string;
}

export const FileNodeComponent = (
  props: FileNodeComponentProps
): JSX.Element => {
  const isCurrentDirectory = props.filePath === props.currentDirectory;

  const Component = () => (
    <div className={styles.filenode}>
      <FileNodeIcon nodeType={props.nodeType} />
      <div className={styles.nodename}>
        {props.name}
        {isCurrentDirectory && (
          <span className={styles.currentdirectory}>
            {" //current directory"}
          </span>
        )}
      </div>
    </div>
  );

  return props.nodeType === "FILE" && props.filePath ? (
    <Link
      style={{
        textDecoration: "none",
      }}
      href={`/?step=${props.step}&openFilePath=${encodeURIComponent(
        props.filePath
      )}`}
    >
      <Component />
    </Link>
  ) : (
    <Component />
  );
};
