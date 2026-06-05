import { Suspense } from "react";

async function DelayedContent() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <p>Loaded after 2 seconds</p>;
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DelayedContent />
    </Suspense>
  );
}
