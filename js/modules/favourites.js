import {
  createCardHeaderElement,
  createCardTopicElement,
  createCardRatingElement,
} from "./card.js";
import { appendElementsToContainer } from "./dom-manipulation.js";
import { clearHtml } from "./dom-utils.js";
import { getStorageItem, setStorageItem } from "./storage.js";

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

export const saveToFavourites = function (topic) {
  if (topic?.id == undefined) return;

  const favourites = getAllFavourites() ?? [];

  favourites.push(topic);

  setStorageItem("favourites", favourites);
};

export const isFavouriteTopic = function (topicInfo) {
  const foundFavouriteTopic = getFavouriteTopic(topicInfo.id);

  const isFavourite = foundFavouriteTopic != undefined;

  return isFavourite;
};

export const getFavouriteTopic = function (topicId) {
  if (topicId == undefined) return;

  const favourites = getAllFavourites();

  if (!favourites?.length) return;

  const foundTopic = favourites.find(({ id }) => id == topicId);

  return foundTopic;
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
