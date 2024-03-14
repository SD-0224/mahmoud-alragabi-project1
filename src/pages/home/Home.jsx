import { Card } from "../../components/card/Card";
import styles from "./Home.module.css";
import { SearchBar } from "./components/searchbar";

export const Home = function ({ topics = [] }) {
  const searchResultsText = topics?.length
    ? `"${topics?.length}" Web Topics Found`
    : "";

  return (
    <>
      <section className={styles["search-section"]}>
        <SearchBar />
      </section>
      <section>
        <h1 className={styles["search-results"]}>{searchResultsText}</h1>
      </section>
      <section>
        <div className={styles["cards-container"]}>
          {topics.map((topic) => (
            <Card key={topic.id} {...topic} />
          ))}
        </div>
      </section>
    </>
  );
};
