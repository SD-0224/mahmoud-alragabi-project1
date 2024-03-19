import styles from "./Card.module.css";
import { StarsRating } from "../stars-rating";
import { CardTopic } from "./components/card-topic";
import { CardHeader } from "./components/card-header";

export const Card = function ({ id, image, category, topic, rating, name }) {
  return (
    <div className={styles["card"]}>
      <a
        className={styles["card-wrapper"]}
        href={`/details.html?topicId=${id}`}
        target="_blank"
      >
        <CardHeader cardImage={image} />
        <div className={styles["card-body"]}>
          <div className={styles["card-category"]}>{category}</div>
          <CardTopic topic={topic} />
          <div className={styles["card-rating"]}>
            <StarsRating rating={rating} />
          </div>
          <div className={styles["card-author"]}>Author: {name}</div>
        </div>
      </a>
    </div>
  );
};
