import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <Link href='/'>
        <a>
          <svg className={styles.logo}>
            <use xlinkHref='/sprite.svg#logo'></use>
          </svg>
        </a>
      </Link>

      <ul className={styles.links}>
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
      <div className={styles.hamburger}>
        <svg className={styles.hamburger_icon}>
          <use xlinkHref='/sprite.svg#hamburger'></use>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
