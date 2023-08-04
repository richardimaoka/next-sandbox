import { Column } from "./components/column/Column";
import { FileNodeComponent } from "./components/sourcecode/filetree/FileNodeComponent";

export default function Home() {
  const fileTree = [
    { nodeType: "FILE", filePath: ".gitignore" },
    { nodeType: "FILE", filePath: "index.html" },
    { nodeType: "FILE", filePath: "package-lock.json" },
    { nodeType: "FILE", filePath: "package.json" },
  ];
  return (
    <main>
      {fileTree.map((file) => (
        <FileNodeComponent
          key={file.filePath}
          nodeType={"FILE"}
          name={file.filePath}
          filePath={file.filePath}
          offset={0}
          isUpdated={false}
          step="1"
        />
      ))}
    </main>
  );
}
