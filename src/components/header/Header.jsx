import { TopBanner } from "./components/top-banner";
import { TopBar } from "./components/top-bar";

export const Header = function () {
  const topBarProps = {
    siteTitle: "Web Topics",
    buttons: [
      {
        text: "Dark Mode",
        icon: "moon-outline",
        className: "toggle-mode",
        ariaLabel: "Switch Theme Mode",
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
