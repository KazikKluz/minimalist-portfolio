import React from 'react';

type Props = {
  children: string;
};

import styles from './button-secondary.module.scss';

const ButtonSecondary = ({ children }: Props) => {
  return <div className={styles.btn}>{children}</div>;
};

export default ButtonSecondary;
