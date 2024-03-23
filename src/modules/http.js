export const fetchTopics = async function (endPoint) {
  const topicsResponse = await fetch(endPoint);

  const topics = await topicsResponse.json();

  return topics;
};

export const getAllTopics = async () => {
  const topicsEndpoint = "https://tap-web-1.herokuapp.com/topics/list";
  const allTopics = await fetchTopics(topicsEndpoint);

  return allTopics;
};
