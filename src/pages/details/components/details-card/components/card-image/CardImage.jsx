import styles from "./CardImage.module.css";

export const CardImage = function ({ imageFileName }) {
  const imagePath = `/assets/images/logos/${imageFileName}`;

  return (
    <div className={styles["image"]}>
      <img src={imagePath} alt={imageFileName} />
    </div>
  );
};
