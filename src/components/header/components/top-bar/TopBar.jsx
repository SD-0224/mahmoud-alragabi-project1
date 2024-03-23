import styles from "./TopBar.module.css";

export const TopBar = function ({ siteTitle, buttons = [] }) {
  return (
    <nav aria-label="Main Navigation">
      <div className={`${styles["top-bar"]} container`}>
        <h1 className={styles["branding"]}>
          <a href="/" aria-label="Homepage">
            {siteTitle}
          </a>
        </h1>

        <div className={styles["top-toggles"]}>
          {buttons.map((button, idx) => (
            <button
              key={idx}
              className={styles[button.className]}
              aria-label={button.ariaLabel}
              aria-pressed="false"
              onClick={button.onClick}
            >
              <ion-icon name={button.icon}></ion-icon>
              <span className={styles["button-label"]}>{button.text}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
