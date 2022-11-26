import styles from './index.module.css';
import Image from 'next/image'

import Banner from "features/banner";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <Banner></Banner>
    </div>
  );
}
