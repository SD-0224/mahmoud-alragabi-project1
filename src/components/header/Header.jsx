import { useEffect, useState } from "react";
import { TopBanner } from "./components/top-banner";
import { TopBar } from "./components/top-bar";
import { setThemeMode } from "../../modules/theme";
import { getStorageItem } from "../../modules/storage";

export const Header = function () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedThemeMode = getStorageItem("isDarkMode");
    const themeMode = savedThemeMode ?? isDarkMode;

    setThemeMode(themeMode, setIsDarkMode);
  }, []);

  const topBarProps = {
    siteTitle: "Web Topics",
    buttons: [
      {
        text: `${isDarkMode ? "Light" : "Dark"} Mode`,
        icon: isDarkMode ? "sunny-outline" : "moon-outline",
        className: "toggle-mode",
        ariaLabel: "Switch Theme Mode",
        onClick: () => {
          const themeMode = !isDarkMode;

          setThemeMode(themeMode, setIsDarkMode);
        },
      },
      {
        text: "Favourites",
        icon: "heart-outline",
        className: "toggle-favourites",
        ariaLabel: "Get Favourites",
      },
    ],
  };

  const topBannerProps = {
    title: "Welcome to our website!",
    subTitle: "We have a new design that's fresh, modern, and easy to use.",
  };

  return (
    <header>
      <TopBar {...topBarProps} />
      <TopBanner {...topBannerProps} />
    </header>
  );
};
