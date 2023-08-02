import { css } from "@emotion/react";
import { secondaryText, surface } from "../../libs/terminalColors";
import { source_code_pro } from "@/libs/fonts";

interface TerminalOutputProps {
  output: string;
  fold: boolean;
}

export const TerminalOutput = ({ output, fold }: TerminalOutputProps) => {
  const foldCss = css`
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  `;

  return (
    <pre
      css={css`
        padding: 4px;
        background-color: ${surface};
        color: ${secondaryText};
        ${fold ? foldCss : ""}
      `}
    >
      <code className={source_code_pro.className}>{output}</code>
    </pre>
  );
};
