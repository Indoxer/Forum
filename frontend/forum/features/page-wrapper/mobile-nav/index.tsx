import styles from "./index.module.css";
import { useReducer } from "react";

import BaseNav from "features/page-wrapper/base-nav";
import SearchBar from "features/page-wrapper/search-bar";

enum Open {
  menu,
  search,
  nothing,
}

function reducer(state: Open, action: Open) {
  if (action == state) {
    return Open.nothing;
  }
  return action;
}



export default function MobileNav() {
  const [state, dispatch] = useReducer(reducer, Open.nothing);

  return (
    <>
      {state == Open.menu && (
        <div className={styles["menu"]}>
          <BaseNav></BaseNav>
        </div>
      )}
      {state == Open.search && (
        <div className={styles["menu"]}>
            <SearchBar></SearchBar>
        </div>
      )}
      <div className={styles["container"]}>
        <img
          className={`
            ${styles["icon"]} 
            ${state == Open.menu ? styles["open"] : ""}
          `}
          onClick={() => dispatch(Open.menu)}
          src="/menu-icon.svg"
        ></img>
        <img
          className={`
            ${styles["icon"]} 
            ${state == Open.search ? styles["open"] : ""}
            `}
          onClick={() => dispatch(Open.search)}
          src="/search-icon.svg"
        ></img>
        <img className={styles["icon"]} src="/profile-icon.svg"></img>
      </div>
    </>
  );
}
