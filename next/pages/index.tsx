import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const MobileScreenshot = () => <div>mobile screenshot</div>;

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
        max-width: 968px;
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
          よって、ここに、国連総会は すべての人間は 加盟国は、国際連合と協力して
        </div>
        <MobileScreenshot />
      </MainContainer>
    </div>
  );
}
