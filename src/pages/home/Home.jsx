import styles from "./Home.module.css";
import { Card } from "../../components/card";
import { SearchBar } from "./components/searchbar";

const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
const response = await fetch(topicsEndpoint);
const topics = await response.json();

export const Home = function () {
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
