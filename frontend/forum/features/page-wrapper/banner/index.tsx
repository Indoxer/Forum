import { ReactNode, useContext } from "react";
import styles from "./index.module.css";
import pagesLinks from "utils/pages-links";
import { useRouter } from "next/router";

import MobileContext from "contexts/mobile-context";
interface BannerProps {
    children?: ReactNode;
}

export default function Banner({children} : BannerProps){
    const {pathname} = useRouter();
    const pageName = pagesLinks[pathname] || "Unknown";

    const isMobile = useContext(MobileContext);

    return (
        <header className={styles["container"]}>
            <div className={`${styles["top"]} ${isMobile ? styles["mobile-top"] : ""}`}>
                <div className={styles["logo"]}>
                    <img src="/logo.svg"></img>
                    <p>Tenet Forum</p>
                </div>

                {isMobile ? "" : children}
            </div>
            <div className={styles["bottom"]}>
                <p>{pageName} Page</p>
            </div>
        </header>
    )
}