import { css } from "@emotion/react";
import { TerminalCommand } from "./TerminalCommand";
import { TerminalOutput } from "./TerminalOutput";

export interface Element {
  text: string;
  kind: "command" | "output";
}

interface TerminalColumnProps {
  elements: Element[];
  fold?: boolean;
}

export const TerminalColumn = ({ elements, fold }: TerminalColumnProps) => {
  return (
    <div
      css={css`
        width: 768px;
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
