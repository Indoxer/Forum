import { useContext } from 'react';

import styles from './index.module.css';
import Post from 'features/posts/post';
import {IPost} from 'features/posts/types';

import classNames from 'utils/class-names';
import MobileContext from 'contexts/mobile-context';

export default function PostsContainer() {
    const isMobile = useContext(MobileContext);

    const posts: IPost[] = [
        {
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
          },
          {
            id: 10,
            title: 'How to create this app? TDD problereate this app? TD work?',
            body: 'Explore these feaks, to videos, photos, auks, to videos, photos, au audio, open education, scientific...',
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
          },
          {
            id: 10,
            title: 'How toos, photos, aurces bp? TDD problem, Why this doesn’t work?',
            body: 'Explore these ks, to videos, photos, aurces below — from literary works, to videos, photos, audio, open education, scientific...',
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
          },
          {
            id: 10,
            title: 'How to creas app? TDD problem, Why thork?',
            body: 'Explore these featured Creative Commons Licensed resources below — from literks, to videos, photos, au photos, audio, open education, scientific...',
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
          },
          {
            id: 10,
            title: 'How to create this app? TDD problem, Why this doesn’t work?w — from literary works, to ',
            body: 'Eces below — from literary works, to videos, phks, to videos, photos, auotos, aks, to videos, photos, auudio, open education, scientific...',
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
          },
    ];
    return (
        <div className={classNames(styles["container"], (isMobile ? styles["mobile-container"] : "")) }>
            {posts.map(post => <Post key={post.id} data={post}></Post>)}
        </div>
    )
}