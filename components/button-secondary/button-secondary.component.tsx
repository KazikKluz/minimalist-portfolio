import React from 'react';

type Props = {
  children: string;
  dark?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = ({ children, dark, onClick, disabled }: Props) => {
  return (
    <button
      type='button'
      className={`${styles.btn} ${dark ? styles.dark : ''} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
