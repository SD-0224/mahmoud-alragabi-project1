import { createFavouriteCardElement } from "./modules/card.js";
import {
  changeThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";
import { appendElementsToContainer } from "./modules/dom-manipulation.js";
import { fetchTopics, renderTopics } from "./modules/topics.js";
import { debounce } from "./modules/utils.js";
import {
  filterChangeHandler,
  sortChangeHandler,
  searchEventHandler,
} from "./handlers/searchbar-handlers.js";
import { setFilterOptions, setSortOptions } from "./modules/searchbar.js";

document.addEventListener("DOMContentLoaded", async function () {
  let topics = [];

  try {
    const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";

    topics = await fetchTopics(topicsEndpoint);

    renderTopics(topics);

    setFilterOptions(topics);

    setSortOptions();
  } catch (error) {
    console.log(error);
  }

  const favourites = topics.filter((topic) => topic.isFavourite);
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = favourites.map(createFavouriteCardElement);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);

  const toggleThemeModeButton = document.getElementById("toggle-mode");

  toggleThemeModeButton.addEventListener("click", changeThemeMode);

  const toggleFavouritesButton = document.getElementById("toggle-favourites");

  toggleFavouritesButton.addEventListener("click", toggleFavourites);

  const searchField = document.getElementById("search-field");

  searchField.addEventListener("input", debounce(searchEventHandler));

  const filterSelect = document.getElementById("filter-select");

  filterSelect.addEventListener("change", (event) =>
    filterChangeHandler(event, topics)
  );

  const sortSelect = document.getElementById("sort-select");

  sortSelect.addEventListener("change", (event) =>
    sortChangeHandler(event, topics)
  );
});
