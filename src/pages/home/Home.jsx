import styles from "./Home.module.css";
import { Card } from "../../components/card";
import { SearchBar } from "./components/searchbar";
import { fetchTopics } from "../../modules/http";
import { useEffect, useState } from "react";
import { fetchTopicsBySearchTerm } from "./components/searchbar/modules/http";
import { debounce } from "../../modules/function-utils";

export const Home = function () {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
      const allTopics = await fetchTopics(topicsEndpoint);

      setTopics(allTopics);
    })();
  }, []);

  const searchChange = async (event) => {
    const searchPhrase = event.target.value;
    const topics = await fetchTopicsBySearchTerm(searchPhrase);

    setTopics(topics);
  };

  const searchResultsText = topics?.length
    ? `"${topics?.length}" Web Topics Found`
    : "";

  return (
    <div className="container">
      <section className={styles["search-section"]}>
        <SearchBar onChange={debounce(searchChange)} />
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
