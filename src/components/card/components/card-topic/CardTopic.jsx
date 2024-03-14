import styles from "./CardTopic.module.css";

export const CardTopic = function ({ topic }) {
  return <h4 className={styles["card-topic"]}>{topic}</h4>;
};
