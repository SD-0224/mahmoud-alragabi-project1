import styles from "./SearchField.module.css";

export const SearchField = function ({ icon, placeholder }) {
  return (
    <div className={styles["search-field"]}>
      <div className={styles["search-icon"]}>
        <ion-icon name={icon}></ion-icon>
      </div>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
