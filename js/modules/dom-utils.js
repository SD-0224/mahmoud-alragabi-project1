export const createOptionElement = function (value = "") {
  const optionElement = document.createElement("option");

  optionElement.value = value;
  optionElement.innerHTML = `<option value="${value}">${value}</option>`;

  return optionElement;
};

export function clearHtml(element) {
  element.innerHTML = "";
}
