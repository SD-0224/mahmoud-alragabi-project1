import styles from "./ListItem.module.css";

export const ListItem = function ({ text }) {
  return (
    <li className={styles["subtopic-item"]}>
      <div className={styles["list-item-icon"]}>
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>
      {text}
    </li>
  );
};
