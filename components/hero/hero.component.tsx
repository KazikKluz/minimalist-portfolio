import React from 'react';
import Image from 'next/image';

import ButtonPrimary from '../button-primary/button-primary.component';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src='/image-homepage-hero.jpg'
        alt='hero banner'
        width={1111}
        height={600}
      />

      <div className={styles.greeting}>
        <ButtonPrimary>About Me</ButtonPrimary>
      </div>
    </div>
  );
};

export default Hero;
