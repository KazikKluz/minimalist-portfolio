import React from 'react';

type Props = {
  children: string;
  dark?: boolean;
  onClick?: () => void;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = ({ children, dark, onClick }: Props) => {
  return (
    <button
      type='button'
      className={`${styles.btn} ${dark ? styles.dark : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
