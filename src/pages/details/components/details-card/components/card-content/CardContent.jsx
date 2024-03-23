import styles from "./CardContent.module.css";
import { CallToAction } from "./components/call-to-action/CallToAction";
import { CardTitle } from "./components/card-title";

export const CardContent = function ({ topic, name, isFavourite }) {
  return (
    <div className={styles["content"]}>
      <CardTitle {...{ topic, name }} />
      <CallToAction {...{ isFavourite }} />
    </div>
  );
};
