import { createStarsRatingHtml } from "./stars-rating.js";

function createCardHeaderElement(cardImage) {
  const cardImageStyle = `
    background:url(images/logos/${cardImage});
    background-color:white;
    background-size:cover;
    background-position:center;
  `;

  return `<div class="card-header" style="${cardImageStyle}"></div>`;
}

function createCardTopicElement(topic) {
  return `<h4 class="card-topic">${topic}</h4>`;
}

function createCardRatingElement(rating = 0) {
  const starsRatingHtml = createStarsRatingHtml(rating);

  return `<div class="card-rating">${starsRatingHtml}</div>`;
}

function createMainCardHtml(card) {
  const cardHeaderElement = createCardHeaderElement(card.image);
  const cardTopicElement = createCardTopicElement(card.topic);
  const cardRatingElement = createCardRatingElement(card.rating);

  return `
    ${cardHeaderElement}
    <div class="card-body">
      <div class="card-category">${card.category}</div>
      ${cardTopicElement}
      ${cardRatingElement}
      <div class="card-author">Author: ${card.name}</div>
    </div>
  `;
}

export function createMainCardElement(card) {
  const cardElement = document.createElement("div");

  cardElement.className = "card";

  cardElement.innerHTML = createMainCardHtml(card);

  return cardElement;
}

function createFavouriteCardHtml(card) {
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
}

export function createFavouriteCardElement(card) {
  const cardElement = document.createElement("div");

  cardElement.className = "favourite-card";

  cardElement.innerHTML = createFavouriteCardHtml(card);

  return cardElement;
}
