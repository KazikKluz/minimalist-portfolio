import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ButtonSecondary from '../button-secondary/button-secondary.component';

type Props = {
  idx?: number;
  rightImage?: boolean;
  title: string;
  description: string;
  buttonTitle: string;
  imageUrl: string;
  w: number;
  h: number;
  id?: string;
  isOnHomepage: boolean;
};

import styles from './preview.module.scss';

const Preview = ({
  idx,
  rightImage,
  title,
  description,
  buttonTitle,
  imageUrl,
  w,
  h,
  id,
  isOnHomepage,
}: Props) => {
  return (
    <div
      id={id}
      className={`${styles.preview} ${isOnHomepage ? styles.homepage : ''}`}
    >
      {!rightImage && (
        <div className={styles.image_container}>
          {/* <Image
            src={imageUrl}
            alt='preview image'
            layout='responsive'
            width={w}
            height={h}
          /> */}
          <picture className={styles.image}>
            <source media='(max-width: 475px)' srcSet={`/mobile${imageUrl}`} />
            <source media='(max-width: 867px)' srcSet={`/tablet${imageUrl}`} />
            <source media='(min-width: 868px)' srcSet={`${imageUrl}`} />
            <img src={`${imageUrl}`} alt='hero image' />
          </picture>
        </div>
      )}
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={idx !== undefined ? `/portfolio/${idx + 1}` : `/portfolio`}>
          <a>
            <ButtonSecondary>{buttonTitle}</ButtonSecondary>
          </a>
        </Link>
      </div>
      {rightImage && (
        <div className={styles.image_container}>
          {/* <Image
            src={imageUrl}
            alt='preview image'
            layout='responsive'
            width={w}
            height={h}
          /> */}
          <picture className={styles.image}>
            <source media='(max-width: 475px)' srcSet={`/mobile${imageUrl}`} />
            <source media='(max-width: 867px)' srcSet={`/tablet${imageUrl}`} />
            <source media='(min-width: 868px)' srcSet={`${imageUrl}`} />
            <img src={`${imageUrl}`} alt='hero image' />
          </picture>
        </div>
      )}
    </div>
  );
};

export default Preview;
