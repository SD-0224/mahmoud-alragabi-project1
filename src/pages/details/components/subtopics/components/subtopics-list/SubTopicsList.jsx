import styles from "./SubTopicsList.module.css";
import { ListItem } from "./components/list-item";

export const SubTopicsList = function ({ subTopics }) {
  return (
    <ul className={styles["subtopics-list"]}>
      {subTopics?.map((subTopic) => (
        <ListItem key={subTopic} text={subTopic} />
      ))}
    </ul>
  );
};
