import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <svg className={styles.logo}>
        <use xlinkHref='sprite.svg#logo'></use>
      </svg>
      <ul className={styles.links}>
        <li>
          <Link href='/'>
            <a className={`${router.pathname == '/' ? styles.active : ''}`}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a
              className={`${
                router.pathname == '/portfolio' ? styles.active : ''
              }`}
            >
              Portfolio
            </a>
          </Link>
        </li>
        <li>
          <Link href='#'>
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
    </div>
  );
};

export default Navbar;
