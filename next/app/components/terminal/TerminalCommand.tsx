import { source_code_pro } from "../fonts/fonts";
import { FlickeringTrail } from "./FlickeringTrail";
import { TerminalPrompt } from "./TerminalPrompt";
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
      <TerminalPrompt />
      <code
        // needs to specify font here, as <code> has its own font
        className={source_code_pro.className}
      >
        {command}
      </code>
      {animate && <FlickeringTrail />}
    </pre>
  );
};
