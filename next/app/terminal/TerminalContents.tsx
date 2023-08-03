import { TerminalCommand } from "./TerminalCommand";
import { TerminalOutput } from "./TerminalOutput";
import styles from "./terminal.module.css";

export const TerminalContents = () => {
  return (
    <div className={styles.contents}>
      <TerminalCommand command="mkdir myproj" fold={false} animate={false} />
      <TerminalCommand command="cd myproj" fold={false} animate={false} />
      <TerminalCommand command="npm init -y" fold={false} animate={false} />
      <TerminalOutput
        output={`Wrote to /home/username/ghq/src/github.com/username/sign-in-with-google-experiment/package.jsonWrote to /home/username/ghq/src/github.com/username/sign-in-with-google-experiment/package.json:

{
  ""name"": ""tmp"",
  ""version"": ""1.0.0"",
  ""description"": """",
  ""main"": ""index.js"",
  ""scripts"": {
    ""test"": ""echo \""Error: no test specified\"" && exit 1""
  },
  ""keywords"": [],
  ""author"": """",
  ""license"": ""ISC""
}`}
        fold={false}
      />
    </div>
  );
};
