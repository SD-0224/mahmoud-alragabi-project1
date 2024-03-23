import styles from "./SearchBar.module.css";
import { SearchControl } from "./components/search-control";
import { SearchField } from "./components/search-field";

export const SearchBar = function ({ onChange }) {
  const searchFieldProps = {
    icon: "search-outline",
    placeholder: "Search the website... ",
    onChange,
  };

  const defaultOption = { text: "Default", value: "" };

  const searchControls = [
    { label: "Sort By:", options: [defaultOption] },
    { label: "Filter By:", options: [defaultOption] },
  ];

  return (
    <div className={styles["searchbar"]}>
      <SearchField {...searchFieldProps} />
      <div className={styles["search-controls"]}>
        {searchControls.map((controlProps, idx) => (
          <SearchControl key={idx} {...controlProps} />
        ))}
      </div>
    </div>
  );
};
