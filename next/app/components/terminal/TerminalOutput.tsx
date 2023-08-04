import { source_code_pro } from "../fonts/fonts";
import styles from "./terminal.module.css";

interface TerminalOutputProps {
  output: string;
  fold: boolean;
}

export const TerminalOutput = ({ output, fold }: TerminalOutputProps) => {
  const className = fold ? styles.output + " " + styles.fold : styles.output;
  return (
    <pre className={className}>
      <code
        // needs to specify font here, as <code> has its own font
        className={source_code_pro.className}
      >
        {output}
      </code>
    </pre>
  );
};
