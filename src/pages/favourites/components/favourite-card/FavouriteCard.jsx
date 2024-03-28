import styles from "./FavouriteCard.module.css";
import { StarsRating } from "../../../../components/stars-rating";
import { CardHeader } from "../../../../components/card/components/card-header";
import { CardTopic } from "../../../../components/card/components/card-topic";

export const FavouriteCard = function ({ image, topic, rating }) {
  return (
    <div className={styles["favourite-card"]}>
      <CardHeader cardImage={image} height="60px" />
      <div className={styles["card-body"]}>
        <CardTopic
          {...{ topic }}
          style={{
            display: "inline",
            marginBottom: "0px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        />
        <StarsRating {...{ rating }} />
      </div>
    </div>
  );
};
