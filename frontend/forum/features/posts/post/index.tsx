import { IPost } from "features/posts/types";

import styles from "./index.module.css";

import formatTime from "utils/time-formatter";

export default function Post({post}: {post: IPost}) {
    const date = new Date(post.created_at);
    const dateText = formatTime(date);
    return (
        <article className={styles["container"]}>
            <div className={styles["info"]}>
                <p>{`${post.answers_amount} answers`}</p>
                <p><span className={styles["author-style"]}>{post.author.username}</span>{` asked ${dateText}`}</p>
            </div>
            <header className={styles["title"]}>{post.title}</header>
            <div className={styles["content"]}>{post.body}</div>
            <div className={styles["tags-container"]}>
                {post.tags.map((tag) => <p className={styles["tag"]}>{`#${tag.name}`}</p>)}
            </div>
        </article>
    );
}