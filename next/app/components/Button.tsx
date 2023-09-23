export async function Button() {
  const data = await fetch("http://localhost:3002/posts");
  const json = await data.json();

  return (
    <div>
      <pre>
        <code>{JSON.stringify(json)}</code>
      </pre>
      <button>this is a buttton</button>
    </div>
  );
}
