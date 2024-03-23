import styles from "./TopicContent.module.css";
import { StarsRating } from "../../../../components/stars-rating";

export const TopicContent = function ({
  description,
  rating,
  category,
  topic,
}) {
  return (
    <div className={styles["topic-content"]}>
      <h4 className={styles["category"]}>{category}</h4>
      <h2>{topic}</h2>
      <div className={styles["stars-rating"]}>
        <StarsRating rating={rating} />
      </div>
      <article className={styles["topic-description"]}>{description}</article>
    </div>
  );
};
