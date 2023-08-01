import { css } from "@emotion/react";
import { TerminalContents } from "./TerminalContents";
import { TerminalElement } from "./TerminalElement";

interface TerminalColumnProps {
  elements: TerminalElement[];
  fold?: boolean;
}

export const TerminalColumn = ({ elements, fold }: TerminalColumnProps) => {
  return (
    <div
      css={css`
        width: 768px;
      `}
    >
      <TerminalContents elements={elements} fold={fold} />
    </div>
  );
};
