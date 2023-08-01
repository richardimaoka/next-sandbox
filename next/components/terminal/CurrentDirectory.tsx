import { menu, primaryText } from "@/libs/terminalColors";
import { css } from "@emotion/react";
import { Source_Code_Pro } from "next/font/google";
import { DirectoryIcon } from "../icon/DirectoryIcon";

const source_code_pro = Source_Code_Pro({ weight: "400", subsets: ["latin"] });
interface CurrentDirectoryProps {
  currentDirectory: string;
}

export const CurrentDirectory = ({
  currentDirectory,
}: CurrentDirectoryProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        background-color: ${menu};
        padding: 4px;
      `}
    >
      <DirectoryIcon />
      <span
        className={source_code_pro.className}
        css={css`
          display: inline-block;
          margin-left: 2px;
          font-size: 12px;
          color: ${primaryText};
        `}
      >
        {currentDirectory}
      </span>
    </div>
  );
};
