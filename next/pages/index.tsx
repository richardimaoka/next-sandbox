import { Browser } from "@/components/Browser";
import { MainContainer } from "@/components/MainContainer";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

export default function Home() {
  return (
    <div className={notoSansJP.className}>
      <MainContainer>
        <Browser src="/images/browser.png" width={1920} height={1080} />
      </MainContainer>
    </div>
  );
}
