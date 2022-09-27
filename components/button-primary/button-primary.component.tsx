import React from 'react';

type Props = {
  children: string;
  disabled?: boolean;
  href?: string;
};

import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children, disabled, href }: Props) => {
  return (
    <a
      href={href}
      className={`${styles.btn} ${disabled ? styles.disabled : ''}`}
    >
      <div className={styles.logo_container}>
        <svg className={styles.logo}>
          <use xlinkHref='sprite.svg#down-arrows'></use>
        </svg>
      </div>
      <div className={styles.text}>{children}</div>
    </a>
  );
};

export default ButtonPrimary;
