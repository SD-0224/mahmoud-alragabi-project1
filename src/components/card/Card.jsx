import styles from "./Card.module.css";
import { StarsRating } from "../stars-rating";
import { CardTopic } from "./components/card-topic";
import { CardHeader } from "./components/card-header";

export const Card = function (card) {
  return (
    <div className={styles["card"]}>
      <a
        className={styles["card-wrapper"]}
        href={`/details.html?topicId=${card.id}`}
        target="_blank"
      >
        <CardHeader cardImage={card.image} />
        <div className={styles["card-body"]}>
          <div className={styles["card-category"]}>{card.category}</div>
          <CardTopic topic={card.topic} />
          <div className={styles["card-rating"]}>
            <StarsRating rating={card.rating} />
          </div>
          <div className={styles["card-author"]}>Author: {card.name}</div>
        </div>
      </a>
    </div>
  );
};
