"use client";

import { useState } from "react";

export function InputComboUnControlled() {
  const [flag, setFlag] = useState(true);

  function onClick() {
    setFlag(!flag);
  }

  // <input> text preserved upon switching the flag
  if (flag) {
    return (
      <div>
        <div>
          this is an &lt;input&gt; with un-controlled, browser-native state
        </div>
        <input />
        <button onClick={onClick}>go to 2</button>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          this is an &lt;input&gt; with un-controlled, browser-native state
        </div>
        <input />
        <button onClick={onClick}>go to 1</button>
      </div>
    );
  }
}
