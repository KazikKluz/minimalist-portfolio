import React from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href='/'>
        <a className={styles.logo_link}>
          <svg className={styles.logo}>
            <use xlinkHref='sprite.svg#logo'></use>
          </svg>
        </a>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/portfolio'>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/contactme'>
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
