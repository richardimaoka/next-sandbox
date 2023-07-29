import { css } from "@emotion/react";
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
        width: 768px;
        margin: 10px 0;

        background-color: #1e1e1e;
        color: white;

        // layout inner contents
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {content}
    </div>
  );
};

const FixedButton = () => (
  <button
    css={css`
      position: fixed;
      bottom: 0px;
      right: 0px;
      font-size: 20px;
      width: 100px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.8);
      color: black;
      border-style: none;
    `}
  >
    next
  </button>
);

export default function Home() {
  const list = [1, 2, 3, 4];

  return (
    <>
      <div
        css={css`
          // flex to allow multiple columns
          display: flex;
          gap: 20px;

          margin: 0 auto;
          @media (max-width: 768px) {
            width: 100vw;
            height: 100svh;
          }

          width: 768px;
          height: 100vh;
          overflow-y: auto;
        `}
      >
        {list.map((x) => (
          <div
            key={x}
            css={css`
              // important to avoid column-width shrink
              flex-shrink: 0;
            `}
          >
            <ChildBox />
          </div>
        ))}
      </div>
    </>
  );
}
