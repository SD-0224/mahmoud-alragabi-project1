import { createMainCardElement } from "./card.js";
import { appendElementsToContainer } from "./dom-manipulation.js";
import { clearHtml } from "./dom-utils.js";
import { deepCopy } from "./utils.js";

export const fetchTopics = async function (endPoint) {
  const topicsResponse = await fetch(endPoint);

  const topics = await topicsResponse.json();

  return topics;
};

export const renderTopics = function (topics = [], sortBy, filterCategory) {
  let topicsCopy = deepCopy(topics);

  const mainCardsContainer = document.getElementById("cards-container");

  if (sortBy) topicsCopy.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  if (filterCategory) {
    topicsCopy = topicsCopy.filter(
      (topic) => topic.category === filterCategory
    );
  }

  const searchResultsHeader = document.getElementById("search-results");

  searchResultsHeader.innerText = `"${topicsCopy.length}" Web Topics Found`;

  const mainCardsElements = topicsCopy.map(createMainCardElement);

  clearHtml(mainCardsContainer);

  appendElementsToContainer(mainCardsContainer, mainCardsElements);
};

export const fetchTopicsBySearchTerm = async function (term = "") {
  const searchEndpoint = `https://tap-web-1.herokuapp.com/topics/list?phrase=${term}`;

  const topics = await fetchTopics(searchEndpoint);

  return topics;
};
