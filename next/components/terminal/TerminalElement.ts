export interface TerminalElement {
  text: string;
  kind: "command" | "output";
  animate?: boolean;
}
