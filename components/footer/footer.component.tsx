import React from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <svg className={styles.logo}>
        <use xlinkHref='sprite.svg#logo'></use>
      </svg>
      <ul className={styles.links}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
      <div className={styles.social}>
        <Link href='#'>
          <a>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#github'></use>
            </svg>
          </a>
        </Link>
        <Link href='#'>
          <a>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#twitter'></use>
            </svg>
          </a>
        </Link>
        <Link href='#'>
          <a>
            <svg className={styles.icon}>
              <use xlinkHref='sprite.svg#linkedin'></use>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
