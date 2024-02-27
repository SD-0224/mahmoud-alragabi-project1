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

export function createThemeModeButtonHtml(isDarkMode = false) {
  const buttonIcon = isDarkMode ? "sunny-outline" : "moon-outline";
  const themeModeText = isDarkMode ? "Light" : "Dark";

  return `
    <ion-icon name="${buttonIcon}"></ion-icon>
    <span class="button-label">${themeModeText} Mode</span>
  `;
}
