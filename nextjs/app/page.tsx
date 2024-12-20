import { List } from "./components/list/List";
import { HoverMenu } from "./components/toggle/HoverMenu";
import { ToggleMenu } from "./components/toggle/ToggleMenu";
import styles from "./page.module.css";

export default function Page() {
  const list = [
    { name: "aaa aa aa a a aa" },
    {
      name: "b b bb",
      childItems: [
        { name: "aaa aa aa a a aa" },
        { name: "b b bb" },
        { name: "cccc" },
      ],
    },
    { name: "cccc" },
  ];
  return (
    <div className={styles.component}>
      <ToggleMenu>
        <List list={list} />
      </ToggleMenu>
      <HoverMenu>
        <List list={list} />
      </HoverMenu>
    </div>
  );
}
