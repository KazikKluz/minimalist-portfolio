import React from 'react';
import Image from 'next/image';

import HeroImage from '../../public/image-homepage-hero@2x.jpg';

import ButtonPrimary from '../button-primary/button-primary.component';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image priority layout='responsive' src={HeroImage} alt='hero banner' />

      <div className={styles.greeting}>
        <h1>
          Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
        </h1>
        <ButtonPrimary>About Me</ButtonPrimary>
      </div>
    </div>
  );
};

export default Hero;
