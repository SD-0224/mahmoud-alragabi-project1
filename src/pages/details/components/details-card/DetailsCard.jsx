import styles from "./DetailsCard.module.css";
import { CardImage } from "./components/card-image";
import { CardContent } from "./components/card-content";

export const DetailsCard = function ({ topic, name, image, isFavourite }) {
  return (
    <div className={styles["details-card"]}>
      <CardImage imageFileName={image} />
      <CardContent {...{ topic, name, isFavourite }} />
    </div>
  );
};
