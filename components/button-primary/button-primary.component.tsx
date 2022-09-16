import React from 'react';

type Props = {
  children: string;
};

import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children }: Props) => {
  return (
    <div className={styles.btn}>
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
