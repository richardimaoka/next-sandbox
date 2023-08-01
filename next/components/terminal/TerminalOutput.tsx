import { css } from "@emotion/react";
import { secondaryText, surface } from "../../libs/terminalColors";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

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
        font-size: 0.8em;
        padding: 4px;
        background-color: ${surface};
        color: ${secondaryText};
        ${fold ? foldCss : ""}
      `}
    >
      <code
        className={source_code_pro.className}
        css={css`
          font-size: 8px;
        `}
      >
        {output}
      </code>
    </pre>
  );
};
