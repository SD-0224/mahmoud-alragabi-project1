import { createMainCardElement } from "./card.js";
import { appendElementsToContainer } from "./dom-manipulation.js";
import { clearHtml } from "./dom-utils.js";
import { createStarsRatingHtml } from "./stars-rating.js";
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

export const fetchTopicDetails = async function (topicId) {
  const topicEndpoint = `https://tap-web-1.herokuapp.com/topics/details/${topicId}`;

  const topic = await fetchTopics(topicEndpoint);

  return topic;
};

const createSubTopicsTitleHtml = function (topicTitle) {
  return `<h1 class="subtopics-title">${topicTitle} Sub Topics</h1>`;
};

const createSubTopicsListItemHtml = function (itemText) {
  return `
    <li class="subtopic-item">
      <ion-icon name="checkmark-circle-outline" class="list-item-icon"></ion-icon>
      ${itemText}
    </li>
`;
};
const createSubTopicsHtml = function (topicInfo) {
  const { topic: topicTitle, subtopics } = topicInfo;

  const topicTitleElement = createSubTopicsTitleHtml(topicTitle);

  const subTopicsItems = subtopics.map((subTopicText) =>
    createSubTopicsListItemHtml(subTopicText)
  );

  const subTopicsItemsHtml = subTopicsItems.join("");

  return ` 
    ${topicTitleElement}
    <ul class="subtopics-list">
      ${subTopicsItemsHtml}
    </ul>
  `;
};

const renderSubTopics = function (topicInfo) {
  const subTopicsContainer = document.getElementById("subtopics-container");
  const subTopicsHtml = createSubTopicsHtml(topicInfo);

  subTopicsContainer.innerHTML = subTopicsHtml;
};

const createDetailsCardImageHtml = function (imageFileName) {
  const imagePath = `images/logos/${imageFileName}`;

  return `
    <div class="image">
      <img src="${imagePath}" alt="${imageFileName}" />
    </div>
  `;
};

const createDetailsCardTitleHtml = function (topicInfo) {
  const { topic: topicTitle, name: authorName } = topicInfo;

  return `
    <div class="title">
      <b>${topicTitle}</b>
      by <a href="#">${authorName}</a>
    </div>
  `;
};

const createDetailsCardHtml = function (topicInfo, isFavourite = false) {
  const imageElement = createDetailsCardImageHtml(topicInfo.image);
  const titleElement = createDetailsCardTitleHtml(topicInfo);

  const toggleFavouriteText = isFavourite ? "Remove from" : "Add to";

  return `
    ${imageElement} 
    <div class="content">
      ${titleElement}
      <div class="call-to-action">
        <p class="top-text">Interested about this topic?</p>
        <button id="toggle-topic-favourite">
          <span>${toggleFavouriteText} Favourites</span>
          <ion-icon name="heart-outline" size="large"></ion-icon>
        </button>
        <p class="bottom-text">Unlimited Credits</p>
      </div>
    </div>
  `;
};

export const renderDetailsCard = function (topicInfo, isFavourite = false) {
  const detailsCardContainerId = "details-card-container";
  const detailsCardContainer = document.getElementById(detailsCardContainerId);

  const detailsCardHtml = createDetailsCardHtml(topicInfo, isFavourite);

  detailsCardContainer.innerHTML = detailsCardHtml;
};

const createTopicCategoryHtml = function (topicCategory) {
  return `<h4 class="category">${topicCategory}</h4>`;
};

const createTopicTitleHtml = function (topicTitle) {
  return `<h2>${topicTitle}</h2>`;
};

const createTopicContentHtml = function (topicInfo) {
  const { topic: topicTitle } = topicInfo;
  const topicCategoryElement = createTopicCategoryHtml(topicInfo.category);
  const topicTitleElement = createTopicTitleHtml(topicTitle);
  const starsRatingElement = createStarsRatingHtml(topicInfo.rating);

  return `
    ${topicCategoryElement}
    ${topicTitleElement}
    <div class="stars-rating">
      ${starsRatingElement}
    </div>
    <article class="topic-description">${topicInfo.description}</article>
  `;
};

export const renderTopicContent = function (topicInfo) {
  const topicContentHtml = createTopicContentHtml(topicInfo);

  const topicContent = document.getElementById("topic-content");

  topicContent.innerHTML = topicContentHtml;
};

export const renderTopicDetails = function (topicInfo, isFavourite = false) {
  renderTopicContent(topicInfo);

  renderDetailsCard(topicInfo, isFavourite);

  renderSubTopics(topicInfo);
};
