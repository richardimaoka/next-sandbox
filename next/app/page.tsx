import { ClientChild } from "./components/ClientChild";
import { ClientParent } from "./components/ClientParent";

export default function Home() {
  return (
    <main>
      <ClientParent>
        <ClientChild />
      </ClientParent>
    </main>
  );
}
