import { css } from "@emotion/react";
import { FlickeringTrail } from "./FlickeringTrail";
import { primaryText, promptColor, surface } from "../../libs/terminalColors";
import { source_code_pro } from "@/libs/fonts";
import { TerminalPrompt } from "./TerminalPrompt";

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
        color: ${primaryText};
        ${fold ? foldCss : ""}
      `}
    >
      <code className={source_code_pro.className}>
        <TerminalPrompt />
        {command}
        {animate && <FlickeringTrail />}
      </code>
    </pre>
  );
};
