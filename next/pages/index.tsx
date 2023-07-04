import { Browser } from "@/components/Browser";
import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";

import { ReactNode } from "react";
const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => (
  // four main purposes of the container:
  // 1. set the width
  // 2. center the container
  // 3. top and bottom spacing
  // 4. background color or image <- this is the only thing to set in the outer container element
  <main>
    <div
      css={css`
        margin: 0 auto;
        max-width: 834px;
      `}
    >
      {children}
    </div>
  </main>
);

export default function Home() {
  return (
    <div className={notoSansJP.className}>
      <MainContainer>
        <Browser src="/images/browser.png" width={1920} height={1080} />
      </MainContainer>
    </div>
  );
}
