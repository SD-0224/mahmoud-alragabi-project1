import styles from "./SubTopics.module.css";
import { Title } from "./components/title";
import { SubTopicsList } from "./components/subtopics-list";

export const SubTopics = function ({ title, subTopics }) {
  return (
    <div className={styles["subtopics-container"]}>
      <Title {...{ title }} />
      <SubTopicsList {...{ subTopics }} />
    </div>
  );
};
