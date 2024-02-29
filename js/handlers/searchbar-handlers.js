import { renderTopics, fetchTopicsBySearchTerm } from "../modules/topics.js";

let sortBy;
let filterCategory;

export const searchEventHandler = async (event) => {
  const searchTerm = event.target.value.trim();

  const topics = await fetchTopicsBySearchTerm(searchTerm);

  renderTopics(topics, sortBy, filterCategory);
};

export const sortChangeHandler = function (event, topics) {
  const sortValue = event.target.value.trim();

  sortBy = sortValue;

  renderTopics(topics, sortBy, filterCategory);
};

export const filterChangeHandler = function (event, topics) {
  const filterValue = event.target.value.trim();

  filterCategory = filterValue;

  renderTopics(topics, sortBy, filterCategory);
};
