import React, { forwardRef } from 'react';

type Props = {
  children: string;
  dark?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, dark, onClick, disabled, href }: Props, ref) => {
    return (
      <a
        href={href}
        className={`${styles.btn} ${dark ? styles.dark : ''} ${
          disabled ? styles.disabled : ''
        }`}
        onClick={disabled ? undefined : onClick}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export default ButtonSecondary;
