import {
  createMainCardElement,
  createFavouriteCardElement,
} from "./modules/card.js";
import {
  changeThemeMode,
  toggleFavourites,
} from "./handlers/navbar-handlers.js";
import { appendElementsToContainer } from "./modules/dom-manipulation.js";

const fetchTopics = async function (endPoint) {
  const topicsResponse = await fetch(endPoint);

  const topics = await topicsResponse.json();

  return topics;
};

const renderTopics = function (topics = []) {
  const searchResultsHeader = document.getElementById("search-results");

  searchResultsHeader.innerText = `"${topics.length}" Web Topics Found`;

  const mainCardsContainer = document.getElementById("cards-container");
  const mainCardsElements = topics.map(createMainCardElement);

  mainCardsContainer.innerHTML = "";

  appendElementsToContainer(mainCardsContainer, mainCardsElements);
};

const fetchTopicsBySearchTerm = async function (term = "") {
  const searchEndpoint = `https://tap-web-1.herokuapp.com/topics/list?phrase=${term}`;

  const topics = await fetchTopics(searchEndpoint);

  return topics;
};

const debounce = function (func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const searchEventHandler = async (event) => {
  const searchTerm = event.target.value.trim();

  const topics = await fetchTopicsBySearchTerm(searchTerm);

  renderTopics(topics);
};

document.addEventListener("DOMContentLoaded", async function () {
  let topics = [];

  try {
    const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";

    topics = await fetchTopics(topicsEndpoint);

    renderTopics(topics);
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
});
