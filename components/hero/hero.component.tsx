import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '../../public/image-homepage-hero@2x.jpg';

import ButtonPrimary from '../button-primary/button-primary.component';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <picture className={styles.image}>
        <source
          media='(max-width: 475px)'
          srcSet='/mobile/image-homepage-hero.jpg 1x, /mobile/image-homepage-hero@2x.jpg 2x'
        />
        <source
          media='(max-width: 867px)'
          srcSet='/tablet/image-homepage-hero.jpg 1x, /tablet/image-homepage-hero@2x.jpg 2x'
        />
        <source
          media='(min-width: 868px)'
          srcSet='/image-homepage-hero.jpg 1x, /image-homepage-hero@2x.jpg 2x'
        />
        <img src='/image-homepage-hero.jpg' alt='hero image' />
      </picture>

      <div className={styles.greeting}>
        <h1>
          Hey, I&rsquo;m Alex Spencer and I love building beautiful websites
        </h1>
        <Link href='#aboutme' passHref>
          <ButtonPrimary>About Me</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
