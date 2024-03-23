import styles from "./Home.module.css";
import { Card } from "../../components/card";
import { SearchBar } from "./components/searchbar";
import { fetchTopics, getAllTopics } from "../../modules/http";
import { useEffect, useState } from "react";
import { fetchTopicsBySearchTerm } from "./components/searchbar/modules/http";
import { debounce } from "../../modules/function-utils";
import { sortTopicsBy } from "./components/searchbar/modules/sort-utils";
import { getFilterOptionsFromTopics } from "./components/searchbar/modules/filter-utils";

export const Home = function () {
  const [topics, setTopics] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  const sortOptions = [
    { text: "Topic Title", value: "topic" },
    { text: "Author Name", value: "name" },
  ];

  useEffect(() => {
    (async () => {
      const allTopics = await getAllTopics();

      setTopics(allTopics);

      const newFilterOptions = getFilterOptionsFromTopics(allTopics);
      const filterOptionsInfo = newFilterOptions.map((filterText) => ({
        text: filterText,
        value: filterText,
      }));

      setFilterOptions(filterOptionsInfo);
    })();
  }, []);

  useEffect(() => {}, [topics]);

  const searchChange = async (event) => {
    const searchPhrase = event.target.value;
    const topics = await fetchTopicsBySearchTerm(searchPhrase);

    setTopics(topics);
  };

  const sortChange = async function (event) {
    const sortBy = event.target.value;
    if (!sortBy) {
      const allTopics = await getAllTopics();

      return setTopics(allTopics);
    }

    const sortedTopics = sortTopicsBy(topics, sortBy);

    setTopics(sortedTopics);
  };

  const filterChange = async function (event) {
    const filterCategory = event.target.value;

    if (!filterCategory) {
      const allTopics = await getAllTopics();

      return setTopics(allTopics);
    }

    const filteredTopics = topics.filter(
      (topic) => topic.category === filterCategory
    );

    setTopics(filteredTopics);
  };

  const searchResultsText = topics?.length
    ? `"${topics?.length}" Web Topics Found`
    : "";

  return (
    <div className="container">
      <section className={styles["search-section"]}>
        <SearchBar
          {...{ sortOptions, filterOptions }}
          onSearchChange={debounce(searchChange)}
          onSortChange={sortChange}
          onFilterChange={filterChange}
        />
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
