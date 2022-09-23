import React from 'react';

type Props = {
  children: string;
  disabled?: boolean;
};

import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children, disabled }: Props) => {
  return (
    <div className={`${styles.btn} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.logo_container}>
        <svg className={styles.logo}>
          <use xlinkHref='sprite.svg#down-arrows'></use>
        </svg>
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default ButtonPrimary;
