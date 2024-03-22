export function getStorageItem(key) {
  const stringifiedItem = localStorage.getItem(key);
  const item = JSON.parse(stringifiedItem);

  return item;
}

export function setStorageItem(key, value) {
  const stringifiedIValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedIValue);
}

export function removeStorageItem(key) {
  localStorage.removeItem(key);
}
