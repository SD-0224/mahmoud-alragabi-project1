import { renderFavourites, getAllFavourites } from "./modules/favourites.js";
import {
  changeThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";

export const sharedPageSetup = function () {
  const favourites = getAllFavourites();

  renderFavourites(favourites);

  const toggleThemeModeButton = document.getElementById("toggle-mode");

  toggleThemeModeButton.addEventListener("click", changeThemeMode);

  const toggleFavouritesButton = document.getElementById("toggle-favourites");

  toggleFavouritesButton.addEventListener("click", toggleFavourites);
};
