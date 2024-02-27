import { createFavouriteCardElement } from "./modules/card.js";

document.addEventListener("DOMContentLoaded", function () {
  const favourites = topics.filter((topic) => topic.isFavourite);
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = favourites.map(createFavouriteCardElement);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);
});
