import Link from "next/link";

export default function Home() {
  return (
    <div>
      This is the home page <Link href="/parent">go to parent</Link>
    </div>
  );
}
