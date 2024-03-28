import { useMainContext } from "../../contexts/main-context";
import styles from "./BottomDrawer.module.css";

export const BottomDrawer = function ({ children }) {
  const { showFavourites } = useMainContext();

  return (
    <div
      className={styles["bottom-drawer"]}
      style={{ transform: `translateY(${showFavourites ? "0%" : "100%"})` }}
    >
      {children}
    </div>
  );
};
