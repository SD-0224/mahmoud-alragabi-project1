import styles from "./ToggleFavouriteButton.module.css";

export const ToggleFavouriteButton = function ({ isFavourite = false }) {
  const toggleFavouriteText = isFavourite ? "Remove from" : "Add to";

  return (
    <button className={styles["toggle-favourite-button"]}>
      <span>{toggleFavouriteText} Favourites</span>
      <ion-icon name="heart-outline" size="large"></ion-icon>
    </button>
  );
};
