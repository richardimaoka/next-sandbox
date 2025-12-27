import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <div>
      This is the parent page.
      <div>
        <Link href="/parent/child">go to child</Link>
      </div>
      <div>
        <Link href="/">go home</Link>
      </div>
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
