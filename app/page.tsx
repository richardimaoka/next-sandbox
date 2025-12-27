import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <div>
      This is the home page
      <div>
        <Link href="/parent">go to parent</Link>
      </div>
      <div>
        <Link href="/parent/child">go to child</Link>
      </div>
      <ViewTransition>
        <div
          style={{
            backgroundColor: "lightblue",
            width: "400px",
            height: "200px",
          }}
        ></div>
      </ViewTransition>
    </div>
  );
}
