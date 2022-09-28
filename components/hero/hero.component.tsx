import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeroImage from '../../public/image-homepage-hero@2x.jpg';

import ButtonPrimary from '../button-primary/button-primary.component';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <Image
        priority
        layout='fill'
        objectFit='contain'
        src={HeroImage}
        alt='hero banner'
      /> */}

      <picture className={styles.image}>
        <source
          media='(max-width: 799px)'
          srcSet='/tablet/image-homepage-hero@2x.jpg'
        />
        <source
          media='(min-width: 800px)'
          srcSet='/image-homepage-hero@2x.jpg'
        />
        <img src='/image-homepage-hero@2x.jpg' alt='hero image' />
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
