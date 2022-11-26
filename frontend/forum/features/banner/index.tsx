import styles from "./index.module.css";

export default function Banner(){
    return (
        <header className={styles["container"]}>
            <img src="/logo.svg"></img>
            Tenet Forum
        </header>
    )
}