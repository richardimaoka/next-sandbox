import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";
const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const Child = () => {
  return (
    <p
      css={css`
        background-color: blue;
      `}
    >
      child
    </p>
  );
};

export default function Home() {
  return (
    <div className={notoSansJP.className}>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            max-width: 600px;
          `}
        >
          <div
            css={css`
              padding: 8px;
              background: rgba(255, 255, 255, 0.8);
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            `}
          >
            よって、ここに、国連総会は すべての人間は
            加盟国は、国際連合と協力して
          </div>
        </div>
      </div>
    </div>
  );
}
