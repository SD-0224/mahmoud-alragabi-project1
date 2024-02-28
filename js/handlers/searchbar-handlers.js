import { renderTopics, fetchTopicsBySearchTerm } from "../modules/topics.js";
import { setFilterOptions } from "../modules/searchbar.js";

export const searchEventHandler = async (event) => {
  const searchTerm = event.target.value.trim();

  const topics = await fetchTopicsBySearchTerm(searchTerm);

  renderTopics(topics);

  setFilterOptions(topics);
};
