import styles from "./index.module.css";

import SearchBar from "features/page-wrapper/search-bar";
import BaseNav from "features/page-wrapper/base-nav";

export default function DesktopNav() {
  return (
    <>
      <BaseNav></BaseNav>
      <div className={styles["search-bar-container"]}><SearchBar></SearchBar></div>
      
      <div className={styles["right"]}>
        <img className={styles["icon-profile"]} src="/profile-icon.svg"></img>
      </div>
    </>
  );
}
