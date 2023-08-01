import { css } from "@emotion/react";
import { secondaryText, surface } from "../../libs/terminalColors";

interface TerminalOutputProps {
  output: string;
}

export const TerminalOutput = ({ output }: TerminalOutputProps) => (
  <pre
    css={css`
      margin: 1px 0px;
      padding: 4px;
      background-color: ${surface};
      color: ${secondaryText};
    `}
  >
    <code>{output}</code>
  </pre>
);
