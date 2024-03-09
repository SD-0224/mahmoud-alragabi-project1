import { renderFavourites, getAllFavourites } from "./modules/favourites.js";
import {
  toggleThemeMode,
  setThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";

export const sharedPageSetup = function () {
  setThemeMode();

  const toggleThemeModeButton = document.getElementById("toggle-mode");

  toggleThemeModeButton.addEventListener("click", toggleThemeMode);

  const toggleFavouritesButton = document.getElementById("toggle-favourites");

  toggleFavouritesButton.addEventListener("click", toggleFavourites);
};
