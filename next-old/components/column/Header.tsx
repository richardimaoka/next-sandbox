import {
  background,
  disabledText,
  menu,
  primaryText,
} from "@/libs/terminalColors";
import { css } from "@emotion/react";

interface HeaderProps {
  columns: string[];
}

export const Header = () => {
  const columns = ["Terminal", "Source Code", "Browser", "Dev Tools"];
  const selectBorder = css`
    border: 1px solid ${primaryText};
    border-bottom: none;
  `;
  return (
    <div
      css={css`
        background-color: ${background};
        padding-left: 8px;
        padding-top: 8px;
        border-bottom: 1px solid ${primaryText};
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          gap: 8px;
          position: relative;
          top: 1px;
        `}
      >
        {columns.map((col, index) => (
          <div
            key={index}
            css={css`
              color: ${index === 0 ? primaryText : disabledText};
              font-size: 12px;
              padding-top: 4px;
              padding-left: 8px;
              padding-right: 8px;
              padding-bottom: ${index === 0 ? 8 + 1 : 4}px;

              background-color: ${menu};

              border-radius: 4px 4px 0px 0px;
              ${index === 0 && selectBorder}
            `}
          >
            {col}
          </div>
        ))}
      </div>
    </div>
  );
};
