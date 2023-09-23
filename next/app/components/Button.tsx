export async function Button() {
  const data = await fetch("http://localhost:3002/posts");
  const json = await data.json();

  async function postNew() {
    "use server";
    fetch("http://localhost:3002/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  return (
    <form action={postNew}>
      <pre>
        <code>{JSON.stringify(json)}</code>
      </pre>
      <button>this is a buttton</button>
    </form>
  );
}
