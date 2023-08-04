"use client";

import { Column } from "./components/column/Column";
import { FileNodeComponent } from "./components/sourcecode/filetree/FileNodeComponent";
import { source_code_pro } from "./components/fonts/fonts";
import { FileTreeHeader } from "./components/sourcecode/filetree/FileTreeHeader";

export default function Home() {
  const fileTree = [
    { nodeType: "FILE", filePath: ".gitignore" },
    { nodeType: "FILE", filePath: "index.html" },
    { nodeType: "FILE", filePath: "package-lock.json" },
    { nodeType: "DIRECTORY", filePath: "package.json" },
  ];
  return (
    <main>
      <div className={source_code_pro.className}>
        <FileTreeHeader isFolded={false} onButtonClick={() => {}} />
        {fileTree.map((file) => (
          <FileNodeComponent
            key={file.filePath}
            nodeType={file.nodeType as "FILE" | "DIRECTORY"}
            name={file.filePath}
            filePath={file.filePath}
            offset={0}
            isUpdated={false}
            step="1"
          />
        ))}
      </div>
    </main>
  );
}
