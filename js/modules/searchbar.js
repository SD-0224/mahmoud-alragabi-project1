import { createOptionElement, clearHtml } from "./dom-utils.js";
import { appendElementsToContainer } from "./dom-manipulation.js";

export const setFilterOptions = function (topics) {
  if (!topics?.length) return;

  const categoryValues = topics.map((topic) => topic.category);
  const uniqueCategories = new Set(categoryValues);
  const categories = Array.from(uniqueCategories);

  const filterSelect = document.getElementById("filter-select");

  const defaultOption = createOptionElement("Default");

  defaultOption.className = "placeholder";

  const categoriesOptions = categories.map(createOptionElement);

  const options = [defaultOption, ...categoriesOptions];

  clearHtml(filterSelect);

  appendElementsToContainer(filterSelect, options);
};
