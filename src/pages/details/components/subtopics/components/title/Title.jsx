import styles from "./Title.module.css";

export const Title = function ({ title }) {
  return <h1 className={styles["subtopics-title"]}>{title} Sub Topics</h1>;
};
