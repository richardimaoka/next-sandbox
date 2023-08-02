import { promptColor } from "@/libs/terminalColors";
import { css } from "@emotion/react";

export const TerminalPrompt = () => (
  <span
    css={css`
      display: inline-block;
      width: 8px;
      margin-right: 8px;
      color: ${promptColor};
    `}
  >
    &gt;
  </span>
);
