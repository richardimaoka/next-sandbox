import { Column } from "./components/column/Column";
import { FileNodeComponent } from "./components/sourcecode/filetree/FileNodeComponent";

export default function Home() {
  return (
    <main>
      {/* <Column /> */}
      <FileNodeComponent
        nodeType="FILE"
        name="index.tsx"
        filePath="index.tsx"
        offset={0}
        isUpdated={false}
        step="1"
      />
    </main>
  );
}
