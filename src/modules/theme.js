import { getStorageItem, setStorageItem } from "./storage";

export function getThemeProps(isDarkMode = false) {
  const lightModeProps = {
    "--bg-default": "#1A1A1A",
    "--bg-body": "#282828",
    "--lines-color": "#000000",
    "--body-text": "#EDEDED",
  };

  const darkModeProps = {
    "--bg-default": "#FFFFFF",
    "--bg-body": "#F0F9FF",
    "--lines-color": "#DDDDDD",
    "--body-text": "#333333",
  };

  const modeProps = isDarkMode ? lightModeProps : darkModeProps;

  return modeProps;
}

export function setThemeMode(isThemeDark, setIsDarkMode = () => {}) {
  const isDarkMode = isThemeDark ?? getStorageItem("isDarkMode");

  setStorageItem("isDarkMode", isDarkMode);

  const rootElement = document.documentElement;

  const themeProps = getThemeProps(isDarkMode);
  const themePropsEntries = Object.entries(themeProps);

  themePropsEntries.map(([prop, value]) =>
    rootElement.style.setProperty(prop, value)
  );

  setIsDarkMode(isDarkMode);
}
