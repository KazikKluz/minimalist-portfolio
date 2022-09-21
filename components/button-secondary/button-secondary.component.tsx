import React from 'react';

type Props = {
  children: string;
  dark?: boolean;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = ({ children, dark }: Props) => {
  return (
    <button className={`${styles.btn} ${dark ? styles.dark : ''}`}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
