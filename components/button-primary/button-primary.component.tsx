import React from 'react';

type Props = {
  children: string;
  disabled?: boolean;
  href?: string;
};

import styles from './button-primary.module.scss';

const ButtonPrimary = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, disabled, href }: Props, ref) => {
    return (
      <a
        href={href}
        className={`${styles.btn} ${disabled ? styles.disabled : ''}`}
        ref={ref}
      >
        <div className={styles.logo_container}>
          <svg className={styles.logo}>
            <use xlinkHref='sprite.svg#down-arrows'></use>
          </svg>
        </div>
        <div className={styles.text}>{children}</div>
      </a>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;
