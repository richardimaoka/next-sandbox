import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <div>
      This is the parent page. <Link href="/">go to home</Link>
      <ViewTransition>
        <div
          style={{
            backgroundColor: "lightblue",
            width: "200px",
            height: "100px",
          }}
        ></div>
      </ViewTransition>
    </div>
  );
}
