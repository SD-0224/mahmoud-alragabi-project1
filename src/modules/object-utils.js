export const deepCopy = function (object) {
  return JSON.parse(JSON.stringify(object));
};
