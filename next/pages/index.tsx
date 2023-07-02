import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";
import Image from "next/image";
import { ReactNode } from "react";
const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const MobileScreenshot = () => (
  <Image
    css={css`
      display: block;
      margin: 0 auto;
      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    `}
    src="/images/sign-in-with-google-1-3.png"
    width="320" // desktop size
    height="536" // desktop size
    alt="screenshot on mobile"
  />
);

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
        <div
          css={css`
            padding: 8px;
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            width: 100%;
          `}
        >
          ボタンを押すとGoogleアカウントを 選択する画面に遷移し
        </div>
        <MobileScreenshot />
      </MainContainer>
    </div>
  );
}
