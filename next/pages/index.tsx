import { Browser } from "@/components/Browser";
import { Column } from "@/components/Column";
import { MainContainer } from "@/components/MainContainer";
import { css, keyframes } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const ChildBox = () => {
  const [content, setContent] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const box = ref.current;
      const rect = box.getBoundingClientRect();
      setContent(
        `x: ${rect.x}, y: ${rect.y} width: ${rect.width} height: ${rect.height}`
      );
    }
  }, []);

  return (
    <div
      ref={ref}
      css={css`
        @media (max-width: 768px) {
          width: 100vw;
        }

        height: 300px;
        width: 400px;
        margin: 10px 0;

        background-color: #1e1e1e;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {content}
    </div>
  );
};

export default function Home() {
  return (
    <div
      css={css`
        @media (max-width: 768px) {
          width: 100vw;
          height: 100vh;
        }

        width: 768px;
        height: 100vh;
        overflow-y: auto;
      `}
    >
      <ChildBox />
    </div>
  );
}
