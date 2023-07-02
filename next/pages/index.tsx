import { css } from "@emotion/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
    <>
      <Child />
    </>
  );
}
