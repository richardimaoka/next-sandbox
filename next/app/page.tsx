"use client";
import styles from "./page.module.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { useRef } from "react";
type Monaco = typeof monaco;

export default function Home() {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }

  return (
    <main className={styles.main}>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="console.log('A')"
        options={{
          readOnly: true, // also tried with readOnly: true
        }}
        onMount={handleEditorDidMount}
      />
    </main>
  );
}
