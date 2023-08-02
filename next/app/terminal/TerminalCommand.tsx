import { source_code_pro } from "../fonts/fonts";
import { FlickeringTrail } from "./FlickeringTrail";
import styles from "./terminal.module.css";

interface TerminalCommandProps {
  command: string;
  fold: boolean;
  animate: boolean;
}

export const TerminalCommand = ({
  command,
  fold,
  animate,
}: TerminalCommandProps) => {
  const className = fold ? styles.command + " " + styles.fold : styles.command;
  return (
    <pre className={className}>
      <code className={source_code_pro.className}>{command}</code>
      {animate && <FlickeringTrail />}
    </pre>
  );
};
