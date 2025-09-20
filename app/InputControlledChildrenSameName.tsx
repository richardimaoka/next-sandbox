"use client";

import { useState } from "react";
import { InputWrapperControlled } from "./InputWrapperControlled";

export function InputControlledChildrenSameName() {
  const [flag, setFlag] = useState(true);

  function onClick() {
    setFlag(!flag);
  }

  // <input> text preserved upon switching the flag
  if (flag) {
    return (
      <div>
        <div>
          this is a nested uncontrolled, browser-native state &lt;input&gt; with
          the same React component name
        </div>
        <InputWrapperControlled />
        <button onClick={onClick}>go to 2</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          this is a nested uncontrolled, browser-native state &lt;input&gt; with
          the same React component name
        </div>
        <InputWrapperControlled />
        <button onClick={onClick}>go to 1</button>
      </div>
    );
  }
}
