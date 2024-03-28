import { useState, useEffect } from "react";
import { getAllTopics } from "../../modules/http";
import styles from "./Favourites.module.css";
import { FavouriteCard } from "./components/favourite-card";

export const Favourites = function () {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    (async () => {
      const allTopics = await getAllTopics();
      console.log(allTopics);
      setTopics(allTopics);
    })();
  }, []);

  return (
    <div className={styles["favourites"]}>
      <h4 className={styles["favourites-title"]}>My Favourite Topics</h4>
      <div className={styles["favourites-container"]}>
        {topics.map((topic) => (
          <FavouriteCard {...topic} />
        ))}
      </div>
    </div>
  );
};
