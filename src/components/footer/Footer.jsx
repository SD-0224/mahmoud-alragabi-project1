import styles from "./Footer.module.css";

export const Footer = function () {
  return (
    <footer className={styles["footer"]}>
      Developed with
      <div className={styles["heart-icon"]}>
        <ion-icon name="heart"></ion-icon>
      </div>
      © 2023
    </footer>
  );
};
