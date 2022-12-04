import { IPost } from "features/posts/types";

import styles from "./index.module.css";

import formatTime from "utils/time-formatter";

import Link from "next/link";

export default function Post({data}: {data: IPost}) {
    const date = new Date(data.created_at);
    const dateText = formatTime(date);
    return (
        <article className={styles["container"]}>
            <div className={styles["info"]}>
                <p>{`${data.answers_amount} answers`}</p>
                <p><span className={styles["author-style"]}>{data.author.username}</span>{` asked ${dateText}`}</p>
            </div>
            <header className={styles["title"]}><Link href={`/posts/${data.id}`}>{data.title}</Link></header>
            <div className={styles["content"]}>{data.body}</div>
            <div className={styles["tags-container"]}>
                {data.tags.map((tag) => <Link href={`/search?tag=${tag.id}`} className={styles["tag"]} key={tag.id}>{`#${tag.name}`}</Link>)}
            </div>
        </article>
    );
}