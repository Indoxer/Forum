import styles from 'pages-styles/index.module.css';
import Image from 'next/image'

import Post from "features/posts/post";

import {IPost} from "features/posts/types";

export default function Home() {
  const post : IPost = {
    id: 10,
    title: 'How to create this app? TDD problem, Why this doesn’t work?',
    body: 'Explore these featured Creative Commons Licensed resources below — from literary works, to videos, photos, audio, open education, scientific...',
    tags: [
      {
        id: 1,
        name: 'Python'
      },
      {
        id: 2,
        name: 'JavaScript',
      },
      {
        id: 3,
        name: 'DRF'
      }
    ],
    created_at: "2021-01-21T16:10:44.482650Z",
    updated_at: "2022-11-21T16:10:44.482650Z",
    author: {
      id: 10,
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
