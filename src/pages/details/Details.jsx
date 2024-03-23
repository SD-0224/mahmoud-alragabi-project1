import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { fetchTopicDetails } from "./modules/http";
import { useEffect, useState } from "react";
import { TopicContent } from "./components/topic-content";
import { DetailsCard } from "./components/details-card";
import { SubTopics } from "./components/subtopics";

export const Details = function () {
  const { id: topicId } = useParams();
  const [topic, setTopic] = useState({});

  useEffect(() => {
    fetchTopicDetails(topicId).then((topic) => setTopic(topic));
  }, []);

  return (
    <>
      <section className={styles["top"]}>
        <div className={styles["details-content"]}>
          <TopicContent {...topic} />
          <aside>
            <DetailsCard {...topic} />
          </aside>
        </div>
      </section>
      <section className={styles["bottom"]}>
        <div className={styles["bottom-container"]}>
          <SubTopics title={topic.topic} subTopics={topic.subtopics} />
        </div>
      </section>
    </>
  );
};
