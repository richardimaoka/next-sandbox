import { css } from "@emotion/react";
import { TerminalCommand } from "./TerminalCommand";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalElement } from "./TerminalElement";

interface TerminalContentsProps {
  elements: TerminalElement[];
  fold?: boolean;
}

export const TerminalContents = ({ elements, fold }: TerminalContentsProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1px 8px;
      `}
    >
      {elements.map((element, index) => {
        if (element.kind === "command") {
          return (
            <TerminalCommand
              key={index}
              command={element.text}
              fold={fold ? true : false}
            />
          );
        } else {
          return (
            <TerminalOutput
              key={index}
              output={element.text}
              fold={fold ? true : false}
            />
          );
        }
      })}
    </div>
  );
};
