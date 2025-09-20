"use client";

import { useState } from "react";
import { InputWrapper } from "./InputWrapper";
import { InputWrapperAnother } from "./InputWrapperAnother";

export function InputChildrenDiffName() {
  const [flag, setFlag] = useState(true);

  function onClick() {
    setFlag(!flag);
  }

  // <input> text preserved upon switching the flag
  if (flag) {
    return (
      <div>
        <div>
          this is a nested &lt;input&gt; with different React component names
        </div>
        <InputWrapper />
        <button onClick={onClick}>go to 2</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          this is a nested &lt;input&gt; with different React component names
        </div>
        <InputWrapperAnother />
        <button onClick={onClick}>go to 1</button>
      </div>
    );
  }
}
