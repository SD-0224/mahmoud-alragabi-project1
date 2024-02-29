export const createOptionElement = function (text = "", value = text) {
  const optionElement = document.createElement("option");

  optionElement.value = value;
  optionElement.innerHTML = `<option value="${value}">${text}</option>`;

  return optionElement;
};

export function clearHtml(element) {
  element.innerHTML = "";
}
