"use client";

import { ReactNode, useEffect, useRef } from "react";
import styles from "./HoverMenu.module.css";

type Props = {
  children: ReactNode;
};

export function HoverMenu(props: Props) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const uuid = crypto.randomUUID(); //use browser's crypto
  const anchorName = "--anchor-" + uuid;

  function showPopover() {
    if (popoverRef.current) {
      // hover has to use JavaScript popover API,
      // because HTML+CSS-only popover is only supported for <button>
      popoverRef.current.showPopover();
    }
  }

  function hidePopover() {
    if (popoverRef.current) {
      // hover has to use JavaScript popover API,
      // because HTML+CSS-only popover is only supported for <button>
      popoverRef.current.hidePopover();
    }
  }

  // useEffect to avoid Hydration error due to crypto.randomUUID():
  // > Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client.
  useEffect(() => {
    if (anchorRef.current) {
      anchorRef.current.style.setProperty("anchor-name", anchorName);
    }
    if (popoverRef.current) {
      popoverRef.current.style.setProperty("position-anchor", anchorName);
    }
  }, [anchorName]);

  return (
    <div
      className={styles.component}
      ref={anchorRef}
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      <div>menu</div>

      <div ref={popoverRef} className={styles.menu} popover="auto">
        {props.children}
      </div>
    </div>
  );
}
