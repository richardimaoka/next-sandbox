import { useState } from "react";

export function InputWrapperControlledAnother() {
  const [text, setText] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return <input onChange={onChange} value={text} />;
}
