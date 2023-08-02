import styles from "./terminal.module.css";

interface TerminalOutputProps {
  output: string;
  fold: boolean;
}

export const TerminalOutput = ({ output, fold }: TerminalOutputProps) => {
  // const foldCss = css`
  //   white-space: pre-wrap; /* Since CSS 2.1 */
  //   white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  //   white-space: -pre-wrap; /* Opera 4-6 */
  //   white-space: -o-pre-wrap; /* Opera 7 */
  //   word-wrap: break-word; /* Internet Explorer 5.5+ */
  // `;

  return (
    <pre className={styles.output}>
      <code>{output}</code>
    </pre>
  );
};
