import styles from "./CardTitle.module.css";

export const CardTitle = function ({ topic, name }) {
  return (
    <div className={styles["title"]}>
      <b>{topic}</b> by <a href="#">{name}</a>
    </div>
  );
};
