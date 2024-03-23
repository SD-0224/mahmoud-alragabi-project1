import { deepCopy } from "../../../../../modules/object-utils";

export const sortTopicsBy = (topics, prop) => {
  if (!prop) return topics;

  const topicsCopy = deepCopy(topics);

  topicsCopy.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));

  return topicsCopy;
};
