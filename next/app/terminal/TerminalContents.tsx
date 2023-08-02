import { TerminalCommand } from "./TerminalCommand";
import { TerminalOutput } from "./TerminalOutput";
import styles from "./terminal.module.css";

export const TerminalContents = () => {
  return (
    <div className={styles.contents}>
      <TerminalCommand
        command="docker pull httpd"
        fold={false}
        animate={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
      <TerminalOutput
        output={`Using default tag: latest
latest: Pulling from library/httpd
648e0aadf75a: Pull complete
c76ba39af630: Pull complete
b9819ffb14ec: Pull complete
37baa60548e6: Pull complete
6dbce5de7542: Pull complete
Digest: sha256:d7262c0f29a26349d6af45199b2770d499c74d45cee5c47995a1ebb336093088
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest`}
        fold={false}
      />
    </div>
  );
};
