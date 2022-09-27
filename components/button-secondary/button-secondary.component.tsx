import React from 'react';

type Props = {
  children: string;
  dark?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = ({
  children,
  dark,
  onClick,
  disabled,
  href,
}: Props) => {
  return (
    <a
      href={href}
      className={`${styles.btn} ${dark ? styles.dark : ''} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </a>
  );
};

export default ButtonSecondary;
