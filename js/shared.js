import { renderFavourites, getAllFavourites } from "./modules/favourites.js";
import {
  changeThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";

export const setupTopBarHandlers = function () {
  const toggleThemeModeButton = document.getElementById("toggle-mode");

  toggleThemeModeButton.addEventListener("click", changeThemeMode);

  const toggleFavouritesButton = document.getElementById("toggle-favourites");

  toggleFavouritesButton.addEventListener("click", toggleFavourites);
};
