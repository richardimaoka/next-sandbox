"use client";
import styles from "./page.module.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="console.log('A')"
        options={{
          readOnly: true, // also tried with readOnly: true
        }}
      />
    </main>
  );
}
