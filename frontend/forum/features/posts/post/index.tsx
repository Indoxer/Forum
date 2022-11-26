import { IPost } from "features/posts/types";

import styles from "./index.module.css";

export default function Post({post}: {post: IPost}) {
    return (
        <article className={styles["container"]}>
            <div className={styles["info"]}>
                <p>{`${post.answers_amount} answers`}</p>
                <p><span className={styles["author-style"]}>{post.author.username}</span>{` asked ${post.created_at}`}</p>
            </div>
            <header className={styles["title"]}>{post.title}</header>
            <div className={styles["content"]}>{post.body}</div>
            <div className={styles["tags-container"]}>
                {post.tags.map((tag) => <p className={styles["tag"]}>{`#${tag}`}</p>)}
            </div>
        </article>
    );
}