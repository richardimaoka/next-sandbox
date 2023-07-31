import { css } from "@emotion/react";
import { GetServerSideProps } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const ChildBox = ({ num }: { num: number }) => {
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>{content}</div>
      <div>{num}</div>
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

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  console.log("getServerSideProps");
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Home() {
  console.log("Home rendering");
  const [list, setList] = useState([1, 2, 3, 4]);
  const router = useRouter();
  const test = typeof router.query.test === "string" ? router.query.test : "a";

  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((list: any) => {
        console.log("returned from api is", list);
        setList(list);
      });
  }, [router]);

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
          height: 50vh;

          // carousel container
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          overflow-x: auto; // buttons are the only way to scroll
          overflow-y: hidden; // let inner column handle y-axis scroll
        `}
      >
        {list.map((x, index) => (
          <div
            key={index}
            css={css`
              // important to avoid column-width shrink
              flex-shrink: 0;

              // carousel scrol to stop
              scroll-snap-align: start;
            `}
          >
            <ChildBox num={x} />
          </div>
        ))}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 768px;
          background-color: #1e1e1e;
          color: white;
        `}
      >
        <Link href={{ pathname: "/", query: { test: test + "a" } }}>test</Link>
      </div>
    </>
  );
}
