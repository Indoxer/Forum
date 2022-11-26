import { ReactNode } from "react";

import useIsMobile from "hooks/use-is-mobile";

import Banner from "features/page-wrapper/banner";
import DesktopNav from "features/page-wrapper/desktop-nav";

import MobileNav from "features/page-wrapper/mobile-nav";

import styles from "./index.module.css"

import MobileContext from "contexts/mobile-context";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <MobileContext.Provider value={isMobile}>
        <Banner></Banner>
        <main className={`${styles["content"]} ${styles["content-mobile"]}`}>
          {children}
        </main>
        <MobileNav></MobileNav>
      </MobileContext.Provider>
    );
  }

  return (
    <MobileContext.Provider value={isMobile}>
      <Banner>
        <DesktopNav></DesktopNav>
      </Banner>
      <main className={styles["content"]}>
          {children}
      </main>
    </MobileContext.Provider>
  );
}
