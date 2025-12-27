import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <div>
        This is the home page
        <div>
          <Link href="/parent">go to parent</Link>
        </div>
        <div>
          <Link href="/parent/child">go to child</Link>
        </div>
        <div
          style={{
            backgroundColor: "lightblue",
            width: "400px",
            height: "200px",
          }}
        ></div>
      </div>
    </ViewTransition>
  );
}
