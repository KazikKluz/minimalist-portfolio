import React from 'react';
import Image from 'next/image';

import ButtonSecondary from '../button-secondary/button-secondary.component';

type Props = {
  rightImage?: boolean;
  title: string;
  description: string;
  buttonTitle: string;
  imageUrl: string;
  w: number;
  h: number;
};

import styles from './preview.module.scss';

const Preview = ({
  rightImage,
  title,
  description,
  buttonTitle,
  imageUrl,
  w,
  h,
}: Props) => {
  return (
    <div className={styles.preview}>
      {!rightImage && (
        <div className={styles.image_container}>
          <Image
            src={imageUrl}
            alt='preview image'
            layout='responsive'
            width={w}
            height={h}
          />
        </div>
      )}
      <div className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
        <ButtonSecondary>{buttonTitle}</ButtonSecondary>
      </div>
      {rightImage && (
        <div className={styles.image_container}>
          <Image
            src={imageUrl}
            alt='preview image'
            layout='responsive'
            width={w}
            height={h}
          />
        </div>
      )}
    </div>
  );
};

export default Preview;
