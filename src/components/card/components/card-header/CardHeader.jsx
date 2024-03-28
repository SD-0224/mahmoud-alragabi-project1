import styles from "./CardHeader.module.css";

export const CardHeader = function ({ cardImage, height }) {
  return (
    <div className={styles["card-header"]} style={{ height }}>
      <img src={`/assets/images/logos/${cardImage}`} />
    </div>
  );
};
