import styles from "./CardHeader.module.css";

export const CardHeader = function ({ cardImage }) {
  return (
    <div className={styles["card-header"]}>
      <img src={`/assets/images/logos/${cardImage}`} />
    </div>
  );
};
