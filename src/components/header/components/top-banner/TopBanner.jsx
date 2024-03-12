import styles from "./TopBanner.module.css";

export const TopBanner = function ({ title, subTitle }) {
  return (
    <div className={styles["top-banner"]}>
      <div className={styles["slanted-divider"]}></div>
      <div className={styles["banner-text"]}>
        <h1 className={styles["banner-title"]}>{title}</h1>
        <p className={styles["banner-subtitle"]}>{subTitle}</p>
      </div>
    </div>
  );
};
