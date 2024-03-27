import styles from "./BottomDrawer.module.css";

export const BottomDrawer = function ({ children }) {
  return <div className={styles["bottom-drawer"]}>{children}</div>;
};
