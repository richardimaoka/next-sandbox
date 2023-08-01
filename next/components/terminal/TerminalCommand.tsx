import { css } from "@emotion/react";
import { FlickeringTrail } from "./FlickeringTrail";
import { primaryText, promptColor, surface } from "../../libs/terminalColors";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });

interface TerminalCommandProps {
  command: string;
  fold: boolean;
}

const Prompt = () => (
  <span
    css={css`
      display: inline-block;
      width: 8px;
      margin-right: 12px;
      color: ${promptColor};
    `}
  >
    &gt;
  </span>
);

export const TerminalCommand = ({ command, fold }: TerminalCommandProps) => {
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
        font-size: 12px;
        background-color: ${surface};
        color: ${primaryText};
        font-family: inherit;
        ${fold ? foldCss : ""}
      `}
    >
      <code className={source_code_pro.className}>
        <Prompt />
        <span
          css={css`
            display: inline-block;
          `}
        >
          {command}
        </span>
        <FlickeringTrail />
      </code>
    </pre>
  );
};
