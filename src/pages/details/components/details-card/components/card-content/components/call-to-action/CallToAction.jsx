import styles from "./CallToAction.module.css";
import { ToggleFavouriteButton } from "./components/toggle-favourite-button";

export const CallToAction = function ({ isFavourite }) {
  return (
    <div className={styles["call-to-action"]}>
      <p className={styles["top-text"]}>Interested about this topic?</p>
      <ToggleFavouriteButton {...{ isFavourite }} />
      <p className={styles["bottom-text"]}>Unlimited Credits</p>
    </div>
  );
};
