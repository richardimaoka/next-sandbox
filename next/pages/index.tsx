import { TerminalColumn } from "@/components/terminal/TerminalColumn";
import { Element } from "@/components/terminal/TerminalColumn";

export default function Home() {
  const data: Element[] = [
    { kind: "command", text: "docker pull httpd" },
    {
      kind: "output",
      text: `Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`,
    },
    { kind: "command", text: "docker images" },
    {
      kind: "output",
      text: `REPOSITORY                                                                                TAG       IMAGE ID       CREATED        SIZE
httpd                                                                                     latest    96a2d0570deb   4 days ago     168MB
asia-northeast1-docker.pkg.dev/richard-playground-382018/google-signin-experiments/next   latest    7962f092a8b3   3 months ago   188MB
asia-northeast1-docker.pkg.dev/richard-playground-382018/google-signin-experiments/next   <none>    56dc74bc2798   3 months ago   188MB
asia-northeast1-docker.pkg.dev/richard-playground-382018/google-signin-experiments/next   <none>    5f1e8ea1a780   3 months ago   186MB`,
    },
    { kind: "command", text: "docker run -it -d httpd" },
    {
      kind: "output",
      text: `151658ef23ea61b20e609c0435c78915bc89184b355eb291cbff379a8f9b9628`,
    },
  ];

  return <TerminalColumn elements={data} />;
}
