import React from 'react';

type Props = {
  children: string;
};

import styles from './button-primary.module.scss';

const ButtonPrimary = ({ children }: Props) => {
  return (
    <div className={styles.btn}>
      <svg className={styles.logo}>
        <use xlinkHref='sprite.svg#down-arrows'></use>
      </svg>
      {children}
    </div>
  );
};

export default ButtonPrimary;
