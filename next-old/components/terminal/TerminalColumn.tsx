import { css } from "@emotion/react";
import { TerminalContents } from "./TerminalContents";
import { TerminalElement } from "./TerminalElement";
import { CurrentDirectory } from "./CurrentDirectory";
import { background, menu, primaryText } from "@/libs/terminalColors";
import { Header } from "../column/Header";

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
      <Header />
      <CurrentDirectory currentDirectory="myproj" />
      <TerminalContents elements={elements} fold={fold} />
    </div>
  );
};
