import { Header } from "../Header";
import styles from "./page.module.css";

interface Props {
  params: { slug: string }; // for dynamic routes only
  searchParams: {
    query?: string | string[];
  };
}

function strOrUndef(param: string | string[] | undefined): string | undefined {
  return typeof param === "string" && param !== "" ? param : undefined;
}

export default function Page(props: Props) {
  const query = strOrUndef(props.searchParams.query);

  const results = [
    {
      id: "8db3cf81-768b-490e-911d-276a4c8bb73b",
      name: "Earth",
      description: "The earth is the third planet from the Sun ",
    },
    {
      id: "bf233bd5-bcac-453e-9971-af047b9bb328",
      name: "Moon",
      description: "The Moon is Earth's only natural satellite.",
    },
    {
      id: "578b38d8-d498-43aa-9dda-162c828f0972",
      name: "Saturn",
      description: "the sixth planet from the Sun",
    },
    {
      id: "6c5288f7-ef60-4668-a55a-09b859a04977",
      name: "Sun",
      description: "The center of the Solar System",
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.results}>
        {results.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
