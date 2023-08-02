import { css } from "@emotion/react";
import { TerminalContents } from "./TerminalContents";
import { TerminalElement } from "./TerminalElement";
import { CurrentDirectory } from "./CurrentDirectory";
import { background, menu, primaryText } from "@/libs/terminalColors";

interface TerminalColumnProps {
  elements: TerminalElement[];
  fold?: boolean;
}

export const TerminalColumn = ({ elements, fold }: TerminalColumnProps) => {
  return (
    <div
      css={css`
        // on mobile, show one column only
        @media (max-width: 768px) {
          width: 100vw;
        }
        width: 768px;
        overflow-x: scroll;
      `}
    >
      <div
        css={css`
          display: flex;
          background-color: ${background};
          padding-left: 8px;
          padding-top: 8px;
        `}
      >
        <div
          css={css`
            color: ${primaryText};
            font-size: 12px;
            padding: 4px 8px;
            background-color: ${menu};
            border-radius: 4px 4px 0px 0px;
          `}
        >
          Terminal
        </div>
      </div>
      <CurrentDirectory currentDirectory="myproj" />
      <TerminalContents elements={elements} fold={fold} />
    </div>
  );
};
