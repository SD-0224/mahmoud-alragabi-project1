import styles from "./CardTopic.module.css";

export const CardTopic = function ({ topic, style }) {
  return (
    <h4 className={styles["card-topic"]} style={style}>
      {topic}
    </h4>
  );
};
