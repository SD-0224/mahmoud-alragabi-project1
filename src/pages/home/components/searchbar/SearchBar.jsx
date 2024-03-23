import styles from "./SearchBar.module.css";
import { SearchControl } from "./components/search-control";
import { SearchField } from "./components/search-field";

export const SearchBar = function ({
  filterOptions,
  sortOptions,
  onSearchChange,
  onFilterChange,
  onSortChange,
}) {
  const searchFieldProps = {
    icon: "search-outline",
    placeholder: "Search the website... ",
    onChange: onSearchChange,
  };

  const defaultOption = { text: "Default", value: "" };

  const searchControls = [
    {
      label: "Sort By:",
      options: [defaultOption, ...sortOptions],
      onChange: onSortChange,
    },
    {
      label: "Filter By:",
      options: [defaultOption, ...filterOptions],
      onChange: onFilterChange,
    },
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
