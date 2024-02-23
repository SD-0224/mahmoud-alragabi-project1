document.addEventListener("DOMContentLoaded", function () {
  const mainCardsContainer = document.getElementById("cards-container");
  const mainCardsElements = topics.map(createMainCardElement);

  const favourites = topics.filter((topic) => topic.isFavourite);
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = favourites.map(createFavouriteCardElement);

  appendElementsToContainer(mainCardsContainer, mainCardsElements);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);
});
