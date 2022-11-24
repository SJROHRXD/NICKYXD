import { HeartFillIcon } from "@primer/octicons-react";
import styles from "../../styles/navSpecialButton.module.css";

export function ButtonSpecial() {
  return (
    <button className={`${styles.ButtonSpecial}`}>
      <HeartFillIcon size={20} />
    </button>
  );
}
