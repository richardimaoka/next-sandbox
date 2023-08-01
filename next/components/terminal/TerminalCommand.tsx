import { css } from "@emotion/react";
import { FlickeringTrail } from "./FlickeringTrail";
import { background, primaryText, surface } from "../../libs/terminalColors";

interface TerminalCommandProps {
  command: string;
}

export const TerminalCommand = ({ command }: TerminalCommandProps) => (
  <pre
    css={css`
      margin: 1px 0px;
      padding: 4px;
      background-color: ${surface};
      color: ${primaryText};
    `}
  >
    <code>
      &gt; {command} <FlickeringTrail />
    </code>
  </pre>
);
