import styles from "./SearchControl.module.css";

export const SearchControl = function ({ label, options }) {
  return (
    <div className={styles["select"]}>
      <div className={styles["select-label"]}>{label}</div>
      <div className={styles["select-field"]}>
        <select>
          {options.map(({ text, value }, idx) => (
            <option key={idx} value={value ?? text}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
