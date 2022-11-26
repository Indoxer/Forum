import styles from "./index.module.css";

export default function SearchBar() {
  return (
    <div className={styles["container"]}>
      <input className={styles["search-input"]} placeholder="Search..."></input>
      <img className={styles["icon-search"]} src="/search-icon.svg"></img>
    </div>
  );
}
