import styles from 'pages-styles/index.module.css';
import Image from 'next/image'

import Post from "features/posts/post";

import {IPost} from "features/posts/types";

export default function Home() {
  const post : IPost = {
    title: 'How to create this app? TDD problem, Why this doesn’t work?',
    body: 'Explore these featured Creative Commons Licensed resources below — from literary works, to videos, photos, audio, open education, scientific...',
    tags: ['Python', 'Threads', 'JavaScript'],
    created_at: "today, 20:11",
    updated_at: "today, 20:11",
    author: {
      username: "Indoxer"
    },
    answers_amount: 50,
  }

  return (
    <div className={styles["container"]}>
      <Post post={post}></Post>
      <Post post={post}></Post>
      <Post post={post}></Post>
    </div>
  );
}
