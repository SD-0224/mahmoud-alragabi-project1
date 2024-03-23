import styles from "./Home.module.css";
import { Card } from "../../components/card";
import { SearchBar } from "./components/searchbar";
import { fetchTopics } from "../../modules/http";

const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
const topics = await fetchTopics(topicsEndpoint);

export const Home = function () {
  const searchResultsText = topics?.length
    ? `"${topics?.length}" Web Topics Found`
    : "";

  return (
    <div className="container">
      <section className={styles["search-section"]}>
        <SearchBar />
      </section>
      <section>
        <h1 className={styles["search-results"]}>{searchResultsText}</h1>
      </section>
      <section>
        <div className={styles["cards-container"]}>
          {topics?.map((topic) => (
            <Card key={topic.id} {...topic} />
          ))}
        </div>
      </section>
    </div>
  );
};
