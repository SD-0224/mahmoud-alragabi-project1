import {
  createMainCardElement,
  createFavouriteCardElement,
} from "./modules/card.js";
import {
  changeThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";
import { appendElementsToContainer } from "./modules/dom-manipulation.js";

document.addEventListener("DOMContentLoaded", async function () {
  let topics = [];

  try {
    const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
    const topicsResponse = await fetch(topicsEndpoint);

    topics = await topicsResponse.json();
  } catch (error) {
    console.log(error);
  }

  const mainCardsContainer = document.getElementById("cards-container");
  const mainCardsElements = topics.map(createMainCardElement);

  const favourites = topics.filter((topic) => topic.isFavourite);
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = favourites.map(createFavouriteCardElement);

  appendElementsToContainer(mainCardsContainer, mainCardsElements);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);

  const toggleThemeModeButton = document.getElementById("toggle-mode");

  toggleThemeModeButton.addEventListener("click", changeThemeMode);

  const toggleFavouritesButton = document.getElementById("toggle-favourites");

  toggleFavouritesButton.addEventListener("click", toggleFavourites);
});
