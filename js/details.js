import { fetchTopicDetails, renderTopicDetails } from "./modules/topics.js";
import { setupTopBarHandlers } from "./shared.js";
import {
  getAllFavourites,
  isFavouriteTopic,
  removeFromFavourites,
  renderFavourites,
  saveToFavourites,
} from "./modules/favourites.js";

document.addEventListener("DOMContentLoaded", async function () {
  setupTopBarHandlers();

  const urlQueries = new URLSearchParams(window.location.search);
  const topicId = urlQueries.get("topicId");

  const topic = await fetchTopicDetails(topicId);

  renderTopicDetails(topic);

  document.addEventListener("click", (event) => {
    const toggleTopicFavouriteButton = event.target.closest(
      "#toggle-topic-favourite"
    );

    if (!toggleTopicFavouriteButton) return;

    const isFavourite = isFavouriteTopic(topic);

    if (isFavourite) removeFromFavourites(topic.id);
    else saveToFavourites(topic);

    const favourites = getAllFavourites();

    renderFavourites(favourites);

    renderTopicDetails(topic);
  });
});
