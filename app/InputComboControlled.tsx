"use client";

import React, { useState } from "react";

export function InputComboControlled() {
  const [flag, setFlag] = useState(true);
  const [text, setText] = useState("");

  function onClick() {
    setFlag(!flag);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // <input> text preserved upon switching the flag
  if (flag) {
    return (
      <div>
        <div>this is an &lt;input&gt; with React-controlled state</div>
        <input onChange={onChange} value={text} />
        <button onClick={onClick}>go to 2</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>this is an &lt;input&gt; with React-controlled state</div>
        <input onChange={onChange} value={text} />
        <button onClick={onClick}>go to 1</button>
      </div>
    );
  }
}
