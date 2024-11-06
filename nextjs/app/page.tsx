import styles from "./page.module.css";

async function f() {
  return [2, true];
}

async function g() {
  const [n, b] = await f();

  console.log(n);
  console.log(b);

  const res = await f();
  console.log(res);
}

export default function Page() {
  g();
  return <div>page</div>;
}
