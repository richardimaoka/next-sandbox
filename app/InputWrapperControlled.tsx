import { useState } from "react";

export function InputWrapperControlled() {
  const [text, setText] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return <input onChange={onChange} value={text} />;
}
