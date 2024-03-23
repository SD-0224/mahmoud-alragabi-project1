import { fetchTopics } from "../../../modules/http";

export const fetchTopicDetails = async function (topicId) {
  const topicEndpoint = `https://tap-web-1.herokuapp.com/topics/details/${topicId}`;

  const topic = await fetchTopics(topicEndpoint);

  return topic;
};
