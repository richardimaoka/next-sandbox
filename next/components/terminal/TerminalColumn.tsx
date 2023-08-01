import { css } from "@emotion/react";
import { TerminalContents } from "./TerminalContents";
import { TerminalElement } from "./TerminalElement";
import { CurrentDirectory } from "./CurrentDirectory";

interface TerminalColumnProps {
  elements: TerminalElement[];
  fold?: boolean;
}

export const TerminalColumn = ({ elements, fold }: TerminalColumnProps) => {
  return (
    <div
      css={css`
        width: 768px;
        overflow-x: scroll;
      `}
    >
      <CurrentDirectory currentDirectory="myproj" />
      <TerminalContents elements={elements} fold={fold} />
    </div>
  );
};
