import { createStarsRatingHtml } from "./stars-rating.js";

export function createCardHeaderElement(cardImage) {
  const cardImageStyle = `
    background:url(images/logos/${cardImage});
    background-color:white;
    background-size:cover;
    background-position:center;
  `;

  return `<div class="card-header" style="${cardImageStyle}"></div>`;
}

export function createCardTopicElement(topic) {
  return `<h4 class="card-topic">${topic}</h4>`;
}

export function createCardRatingElement(rating = 0) {
  const starsRatingHtml = createStarsRatingHtml(rating);

  return `<div class="card-rating">${starsRatingHtml}</div>`;
}

export function createMainCardHtml(card) {
  const cardHeaderElement = createCardHeaderElement(card.image);
  const cardTopicElement = createCardTopicElement(card.topic);
  const cardRatingElement = createCardRatingElement(card.rating);

  return `
    <a class="card-wrapper" href="/details.html?topicId=${card.id}" target="_blank">
      ${cardHeaderElement}
      <div class="card-body">
        <div class="card-category">${card.category}</div>
        ${cardTopicElement}
        ${cardRatingElement}
        <div class="card-author">Author: ${card.name}</div>
      </div>
    </a>
  `;
}

export function createMainCardElement(card) {
  const cardElement = document.createElement("div");

  cardElement.className = "card";

  cardElement.innerHTML = createMainCardHtml(card);

  return cardElement;
}
