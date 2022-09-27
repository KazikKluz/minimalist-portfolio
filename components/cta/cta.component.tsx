import React from 'react';
import Link from 'next/link';

import ButtonSecondary from '../button-secondary/button-secondary.component';

import styles from './cta.module.scss';

const Cta = () => {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>
        Interested in doing a project together?
      </h2>
      <div className={styles.line}></div>
      <Link href='/contactme' passHref>
        <ButtonSecondary>Contact Me</ButtonSecondary>
      </Link>
    </div>
  );
};

export default Cta;
