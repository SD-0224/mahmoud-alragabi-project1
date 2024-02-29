import { createOptionElement, clearHtml } from "./dom-utils.js";
import { appendElementsToContainer } from "./dom-manipulation.js";

function createDefaultOptionElement() {
  const defaultOption = createOptionElement("Default");

  defaultOption.className = "placeholder";

  return defaultOption;
}

function setSelectOptions(selectElement, options) {
  const defaultOption = createDefaultOptionElement();

  const optionsElements = [defaultOption, ...options];

  clearHtml(selectElement);

  appendElementsToContainer(selectElement, optionsElements);
}

export const setFilterOptions = function (topics) {
  if (!topics?.length) return;

  const categoryValues = topics.map((topic) => topic.category);
  const uniqueCategories = new Set(categoryValues);
  const categories = Array.from(uniqueCategories);

  const filterSelect = document.getElementById("filter-select");
  const categoriesOptions = categories.map((category) =>
    createOptionElement(category)
  );

  setSelectOptions(filterSelect, categoriesOptions);
};

export const setSortOptions = function () {
  const sortOptions = [
    { text: "Topic Title", value: "topic" },
    { text: "Author Name", value: "name" },
  ];

  const sortSelect = document.getElementById("sort-select");
  const options = sortOptions.map(({ text, value }) =>
    createOptionElement(text, value)
  );

  setSelectOptions(sortSelect, options);
};
