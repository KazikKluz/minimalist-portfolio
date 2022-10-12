import React from 'react';
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
          <picture className={styles.image}>
            <source
              media='(max-width: 475px)'
              srcSet={`/mobile${imageUrl}.jpg 1x, /mobile${imageUrl}@2x.jpg 2x`}
            />
            <source
              media='(max-width: 867px)'
              srcSet={`/tablet${imageUrl}.jpg 1x, /tablet${imageUrl}@2x.jpg 2x`}
            />
            <source
              media='(min-width: 868px)'
              srcSet={`${imageUrl}.jpg 1x, ${imageUrl}@2x.jpg 2x`}
            />

            <img src={`${imageUrl}.jpg`} alt='hero image' />
          </picture>
        </div>
      )}
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={idx !== undefined ? `/portfolio/${idx + 1}` : `/portfolio`}>
          <ButtonSecondary>{buttonTitle}</ButtonSecondary>
        </Link>
      </div>
      {rightImage && (
        <div className={styles.image_container}>
          <picture className={styles.image}>
            <source
              media='(max-width: 475px)'
              srcSet={`/mobile${imageUrl}.jpg 1x, /mobile${imageUrl}@2x.jpg 2x`}
            />
            <source
              media='(max-width: 867px)'
              srcSet={`/tablet${imageUrl}.jpg 1x, /tablet${imageUrl}@2x.jpg 2x`}
            />

            <source
              media='(min-width: 868px)'
              srcSet={`${imageUrl}.jpg 1x, ${imageUrl}@2x.jpg 2x`}
            />
            <img src={`${imageUrl}.jpg`} alt='hero image' />
          </picture>
        </div>
      )}
    </div>
  );
};

export default Preview;
