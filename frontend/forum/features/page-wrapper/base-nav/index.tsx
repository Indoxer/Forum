import Link from "next/link";
import styles from "./index.module.css";

import pagesLinks from "utils/pages-links";

export default function BaseNav() {
  const links = Object.keys(pagesLinks).map((url) => {
    return (
      <Link key={url} className={styles["nav-element"]} href={url}>
        {pagesLinks[url]}
      </Link>
    );
  });
  return (
    <nav className={styles["nav"]}>{links}</nav>
  );
}
