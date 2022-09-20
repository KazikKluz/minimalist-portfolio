import React from 'react';
import Link from 'next/link';

import styles from './paginator.module.scss';

type Props = {
  pageNo: number;
};

const Paginator = ({ pageNo }: Props) => {
  let leftPage;
  let rightPage;

  switch (pageNo) {
    case 1:
      leftPage = 'Fylo';
      rightPage = 'Bookmarks';
      break;
    case 2:
      leftPage = 'Manage';
      rightPage = 'Insure';
      break;
    case 3:
      leftPage = 'Bookmark';
      rightPage = 'Fylo';
      break;
    case 4:
      leftPage = 'Insure';
      rightPage = 'Manage';
      break;
  }
  return (
    <div className={styles.paginator}>
      {/* <Link href={`/portfolio/${pageNo === 1 ? '4' : (pageNo - 1).toString()}`}>
        <a className={styles.left}>
          <svg className={styles.icon}>
            <use xlinkHref='/sprite.svg#arrow-left'></use>
          </svg>
          <div className={styles.text}>
            <h4>{leftPage}</h4>
            <p>Previous Project</p>
          </div>
        </a>
      </Link> */}
      <div className={styles.left}>
        <Link
          href={`/portfolio/${pageNo === 1 ? '4' : (pageNo - 1).toString()}`}
        >
          <a>
            <svg className={styles.icon}>
              <use xlinkHref='/sprite.svg#arrow-left'></use>
            </svg>
            <div className={styles.text}>
              <h4>{leftPage}</h4>
              <p>Previous Project</p>
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <Link
          href={`/portfolio/${pageNo === 4 ? '1' : (pageNo + 1).toString()}`}
        >
          <a className={styles.next}>
            <div className={styles.text}>
              <h4>{rightPage}</h4>
              <p>Next Project</p>
            </div>
            <svg className={styles.icon}>
              <use xlinkHref='/sprite.svg#arrow-right'></use>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Paginator;
