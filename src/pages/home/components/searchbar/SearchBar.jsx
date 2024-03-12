import styles from "./SearchBar.module.css";
import { SearchControl } from "./components/search-control";
import { SearchField } from "./components/search-field";

export const SearchBar = function () {
  const searchFieldProps = {
    icon: "search-outline",
    placeholder: "Search the website... ",
  };

  const searchControls = [
    { label: "Sort By:", options: [] },
    { label: "Filter By:", options: [] },
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
