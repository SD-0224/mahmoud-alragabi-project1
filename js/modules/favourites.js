import {
  createCardHeaderElement,
  createCardTopicElement,
  createCardRatingElement,
} from "./card.js";
import { appendElementsToContainer } from "./dom-manipulation.js";
import { clearHtml } from "./dom-utils.js";
import { getStorageItem } from "./storage.js";

const createFavouriteCardHtml = function (card) {
  const cardHeaderElement = createCardHeaderElement(card.image);
  const cardTopicElement = createCardTopicElement(card.topic);
  const cardRatingElement = createCardRatingElement(card.rating);

  return `
    ${cardHeaderElement}
    <div class="card-body">
      ${cardTopicElement}
      ${cardRatingElement}
    </div>
  `;
};

const createFavouriteCardElement = function (card) {
  const cardElement = document.createElement("div");

  cardElement.className = "favourite-card";

  cardElement.innerHTML = createFavouriteCardHtml(card);

  return cardElement;
};

const updateFavourites = function (favourites) {
  const stringifiedFavourites = JSON.stringify(favourites);

  localStorage.setItem("favourites", stringifiedFavourites);
};

export const saveToFavourites = function (topic) {
  if (topic?.id == undefined) return;

  const stringifiedTopic = JSON.stringify(topic);

  localStorage.setItem(topic.id, stringifiedTopic);
};

export const getFavouriteTopic = function (topicId) {
  if (topicId == undefined) return;

  const stringifiedTopic = localStorage.getItem(topicId);

  return JSON.parse(stringifiedTopic);
};

export const removeFromFavourites = function (topicId) {
  if (topicId == undefined) return;

  localStorage.removeItem(topicId);
};

export const orderById = (a, b) => a.id - b.id;

export const getAllFavourites = function () {
  const favourites = getStorageItem("favourites");

  return favourites;
};

export const renderFavourites = function (topics) {
  if (!topics?.length) return;

  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = topics.map(createFavouriteCardElement);

  clearHtml(favouritesContainer);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);
};
