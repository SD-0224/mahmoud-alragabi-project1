export const getFilterOptionsFromTopics = function (topics) {
  if (!topics?.length) return [];

  const categoryValues = topics.map((topic) => topic.category);
  const uniqueCategories = new Set(categoryValues);
  const categories = Array.from(uniqueCategories);

  return categories;
};
