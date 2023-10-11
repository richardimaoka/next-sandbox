"use client";
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
// const userAgent = navigator.userAgent;
//  ⨯ node_modules/.pnpm/monaco-editor@0.44.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js (106:0) @ eval
// //  ⨯ ReferenceError: navigator is not defined
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./components/Editor"), { ssr: false });

export default function Home() {
  return <main>{<Editor />}</main>;
}
