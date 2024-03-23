import { fetchTopics } from "../../../../../modules/http";

export const fetchTopicsBySearchTerm = async function (term = "") {
  const searchEndpoint = `https://tap-web-1.herokuapp.com/topics/list?phrase=${term}`;

  const topics = await fetchTopics(searchEndpoint);

  return topics;
};
