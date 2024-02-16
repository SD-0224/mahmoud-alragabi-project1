let isDarkMode = false;
let showFavourites = false;

function fiveStarsRatingToPercentage(rating = 0) {
  const SINGLE_STAR_PERCENTAGE = 20;
  const ratingPercentage = rating * SINGLE_STAR_PERCENTAGE;

  return ratingPercentage;
}

function createStarsRatingSvgByPercentage(percentage = 0) {
  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 32">
      <g>
        <path class="star-empty" d="M145.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6h-10.6l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6 l-3.5,10H115c-0.5,0-0.8,0.2-0.9,0.6c0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L119.8,30c0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L130,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C146,12.9,146.1,12.5,145.9,12.1L145.9,12.1z" />
        <path class="star-empty" d="M107.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H96.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H77c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L81.8,30c0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L92,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C108,12.9,108.1,12.5,107.9,12.1L107.9,12.1z" />
        <path class="star-empty" d="M69.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H58.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H39c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L43.8,30c0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L54,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C70,12.9,70.1,12.5,69.9,12.1L69.9,12.1z" />
        <path class="star-empty" d="M31.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H20.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H1c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L5.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L16,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C32,12.9,32.1,12.5,31.9,12.1L31.9,12.1z" />
        <path class="star-empty" d="M183.9,12.1L183.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6h-10.6l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H153c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L157.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L168,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C184,12.9,184.1,12.5,183.9,12.1z" />
      </g>
      <clipPath id="star-filled">
        <path class="star-filled" d="M145.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6h-10.6l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H115c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L119.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L130,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C146,12.9,146.1,12.5,145.9,12.1L145.9,12.1z" />
        <path class="star-filled" d="M107.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H96.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H77c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L81.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L92,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C108,12.9,108.1,12.5,107.9,12.1L107.9,12.1z" />
        <path class="star-filled" d="M69.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H58.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H39c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L43.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L54,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C70,12.9,70.1,12.5,69.9,12.1L69.9,12.1z" />
        <path class="star-filled" d="M31.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6H20.4l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H1c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L5.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L16,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C32,12.9,32.1,12.5,31.9,12.1L31.9,12.1z" />
        <path class="star-filled" d="M183.9,12.1L183.9,12.1c-0.1-0.4-0.5-0.6-0.9-0.6h-10.6l-3.5-10c-0.1-0.4-0.5-0.6-0.9-0.6c-0.5,0-0.8,0.2-0.9,0.6l-3.5,10H153c-0.5,0-0.8,0.2-0.9,0.6c-0.1,0.5,0,0.8,0.3,1.1l8.5,6.7L157.8,30c-0.1,0.4,0,0.8,0.3,1.1c0.4,0.2,0.8,0.3,1.2,0L168,25l8.7,6.1c0.2,0.1,0.4,0.2,0.6,0.2c0.5,0,1-0.4,1-1c0-0.1,0-0.2-0.1-0.4l-3.1-10.1l8.5-6.7C184,12.9,184.1,12.5,183.9,12.1z" />
      </clipPath>
      <rect class="rect-filled" x="0" width="${percentage}%" height="32" clip-path="url(#star-filled)"/>
    </svg>
  `;
}

function createStarsRatingHtml(rating = 0) {
  const ratingPercentage = fiveStarsRatingToPercentage(rating);
  const starsSvg = createStarsRatingSvgByPercentage(ratingPercentage);

  return `<div class="stars">${starsSvg}</div>`;
}

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
  return `<div class="card-topic">${topic}</div>`;
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

function getThemeProps(isDarkMode = false) {
  const lightModeProps = {
    "--bg-default": "#1A1A1A",
    "--bg-body": "#282828",
    "--lines-color": "#000000",
    "--body-text": "#EDEDED",
  };

  const darkModeProps = {
    "--bg-default": "#FFFFFF",
    "--bg-body": "#F0F9FF",
    "--lines-color": "#DDDDDD",
    "--body-text": "#333333",
  };

  const modeProps = isDarkMode ? lightModeProps : darkModeProps;

  return modeProps;
}

function createThemeModeButtonHtml(isDarkMode = false) {
  const buttonIcon = isDarkMode ? "sun" : "moon";
  const themeModeText = isDarkMode ? "Light" : "Dark";

  return `
    <i class="far fa-${buttonIcon}"></i>
    <span class="button-label">${themeModeText} Mode</span>
  `;
}

function changeThemeMode() {
  isDarkMode = !isDarkMode;

  const rootElement = document.querySelector(":root");

  const themeProps = getThemeProps(isDarkMode);
  const themePropsEntries = Object.entries(themeProps);

  themePropsEntries.map(([prop, value]) =>
    rootElement.style.setProperty(prop, value)
  );

  const modeButtonElement = document.querySelector(".toggle-mode");

  modeButtonElement.innerHTML = createThemeModeButtonHtml(isDarkMode);
}

function createMainCardElement(card) {
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

function createFavouriteCardElement(card) {
  const cardElement = document.createElement("div");

  cardElement.className = "favourite-card";

  cardElement.innerHTML = createFavouriteCardHtml(card);

  return cardElement;
}

function toggleFavourites() {
  showFavourites = !showFavourites;

  const bottomDrawer = document.getElementById("bottom-drawer");
  const translateY = `translateY(${showFavourites ? 0 : "100%"})`;

  bottomDrawer.style.transform = translateY;
}

function appendElementsToContainer(container, elements) {
  elements.map((element) => container.appendChild(element));
}

document.addEventListener("DOMContentLoaded", function () {
  const mainCardsContainer = document.getElementById("cards-container");
  const mainCardsElements = topics.map(createMainCardElement);

  const favourites = topics.filter((topic) => topic.isFavourite);
  const favouritesContainer = document.getElementById("favourites-container");
  const favouriteCardsElements = favourites.map(createFavouriteCardElement);

  appendElementsToContainer(mainCardsContainer, mainCardsElements);

  appendElementsToContainer(favouritesContainer, favouriteCardsElements);
});
