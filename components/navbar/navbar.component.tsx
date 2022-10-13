import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  const handleChangeSite = () => setVisible(false);

  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <a>
          <svg className={styles.logo}>
            <use xlinkHref='/minimalist-portfolio/sprite.svg#logo'></use>
          </svg>
        </a>
      </Link>

      <ul>
        <li>
          <Link href='/'>
            <a className={`${router.pathname == '/' ? styles.active : ''}`}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/portfolio'>
            <a
              className={`${
                router.pathname.startsWith('/portfolio') ? styles.active : ''
              }`}
            >
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contactme'>
            <a
              className={`${
                router.pathname == '/contactme' ? styles.active : ''
              }`}
            >
              Contact Me
            </a>
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className={styles.hamburger}>
        <svg className={styles.hamburger_icon}>
          <use
            xlinkHref={
              visible
                ? '/minimalist-portfolio/sprite.svg#close'
                : '/minimalist-portfolio/sprite.svg#hamburger'
            }
          ></use>
        </svg>
      </div>
      <div className={`${styles.subnav} ${!visible && styles.hide}`}>
        <ul className={styles.links}>
          <li className={styles.items}>
            <Link href='/'>
              <a onClick={handleChangeSite}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <a onClick={handleChangeSite}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href='/contactme'>
              <a onClick={handleChangeSite}>Contact Me</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
