import { getThemeProps, createThemeModeButtonHtml } from "../modules/theme.js";
import { getAllFavourites, renderFavourites } from "../modules/favourites.js";
import { getStorageItem, setStorageItem } from "../modules/storage.js";

let showFavourites = false;

export function setThemeMode(isThemeDark) {
  const isDarkMode = isThemeDark ?? getStorageItem("isDarkMode");

  setStorageItem("isDarkMode", isDarkMode);

  const rootElement = document.querySelector(":root");

  const themeProps = getThemeProps(isDarkMode);
  const themePropsEntries = Object.entries(themeProps);

  themePropsEntries.map(([prop, value]) =>
    rootElement.style.setProperty(prop, value)
  );

  const modeButtonElement = document.getElementById("toggle-mode");

  modeButtonElement.innerHTML = createThemeModeButtonHtml(isDarkMode);
}

export function toggleThemeMode() {
  let isDarkMode = getStorageItem("isDarkMode") ?? false;

  isDarkMode = !isDarkMode;

  setThemeMode(isDarkMode);
}

export function toggleFavourites() {
  showFavourites = !showFavourites;

  if (showFavourites) {
    const favourites = getAllFavourites();

    renderFavourites(favourites);
  }

  const bottomDrawer = document.getElementById("bottom-drawer");
  const translateY = `translateY(${showFavourites ? 0 : "100%"})`;

  bottomDrawer.style.transform = translateY;
}
