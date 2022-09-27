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
}: Props) => {
  return (
    <div id={id} className={styles.preview}>
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
        <Link href={idx !== undefined ? `/portfolio/${idx + 1}` : `/portfolio`}>
          <a>
            <ButtonSecondary>{buttonTitle}</ButtonSecondary>
          </a>
        </Link>
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
