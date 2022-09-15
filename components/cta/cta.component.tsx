import React from 'react';

import ButtonSecondary from '../button-secondary/button-secondary.component';

import styles from './cta.module.scss';

const Cta = () => {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>
        Interested in doing a project together?
      </h2>
      <div className={styles.line}></div>
      <ButtonSecondary>Contact Me</ButtonSecondary>
    </div>
  );
};

export default Cta;
