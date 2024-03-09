export const debounce = function (func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const deepCopy = function (object) {
  return JSON.parse(JSON.stringify(object));
};

export function removeFromArrayBy(array, criteria) {
  const [firstEntry] = Object.entries(criteria);
  const [key, value] = firstEntry;

  const itemIdx = array.findIndex((item) => item[key] == value);

  array.splice(itemIdx, 1);
}
