import Link from "next/link";
import { ViewTransition } from "react";

export default function Home() {
  return (
    <ViewTransition>
      <div>
        <div>This is the child page</div>
        <div>
          <Link href="/parent">go to parent</Link>
        </div>
        <div>
          <Link href="/">go home</Link>
        </div>
        <div
          style={{
            backgroundColor: "lightblue",
            width: "100px",
            height: "50px",
          }}
        ></div>
      </div>
    </ViewTransition>
  );
}
