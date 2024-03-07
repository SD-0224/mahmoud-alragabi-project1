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
