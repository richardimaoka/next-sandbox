import { Browser } from "@/components/Browser";
import { Column } from "@/components/Column";
import { MainContainer } from "@/components/MainContainer";
import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect, useState } from "react";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

export default function Home() {
  const command = "mkdir sign-in-with-google-experiment";
  const [writtenLength, setWrittenLength] = useState(0);

  useEffect(() => {
    if (command && writtenLength < command.length) {
      const incrementStep = command.length / 10;
      const nextLength = Math.min(
        writtenLength + incrementStep,
        command.length
      );
      setTimeout(() => {
        setWrittenLength(nextLength);
      }, 20);
    }
  });

  return (
    <pre
      css={css`
        margin: 1px 0px;
        padding: 4px;
        background-color: #1e1e1e;
        color: #f1f1f1;
        border-bottom: 1px solid #333333;
      `}
    >
      <code>{command?.substring(0, writtenLength)}</code>
    </pre>
  );
}
