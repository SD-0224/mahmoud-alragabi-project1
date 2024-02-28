import { createMainCardElement } from "./card.js";
import { appendElementsToContainer } from "./dom-manipulation.js";
import { clearHtml } from "./dom-utils.js";

export const fetchTopics = async function (endPoint) {
  const topicsResponse = await fetch(endPoint);

  const topics = await topicsResponse.json();

  return topics;
};

export const renderTopics = function (topics = []) {
  const searchResultsHeader = document.getElementById("search-results");

  searchResultsHeader.innerText = `"${topics.length}" Web Topics Found`;

  const mainCardsContainer = document.getElementById("cards-container");
  const mainCardsElements = topics.map(createMainCardElement);

  clearHtml(mainCardsContainer);

  appendElementsToContainer(mainCardsContainer, mainCardsElements);
};

export const fetchTopicsBySearchTerm = async function (term = "") {
  const searchEndpoint = `https://tap-web-1.herokuapp.com/topics/list?phrase=${term}`;

  const topics = await fetchTopics(searchEndpoint);

  return topics;
};
