import {
  createCardHeaderElement,
  createCardTopicElement,
  createCardRatingElement,
} from "./card.js";

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

  localStorage.setItem(topic.id, topic);
};

export const getFavouriteTopic = function (topicId) {
  if (topicId == undefined) return;

  localStorage.getItem(topicId);
};

export const removeFromFavourites = function (topicId) {
  if (topicId == undefined) return;

  localStorage.removeItem(topicId);
};

export const setFavouritesCards = function (topics) {
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = topics.map(createFavouriteCardElement);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);
};
