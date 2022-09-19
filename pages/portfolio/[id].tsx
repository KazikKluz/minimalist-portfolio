import type { ReactElement } from 'react';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from '../_app';

import Layout from '../../components/layout/layout.component';
import ButtonSecondary from '../../components/button-secondary/button-secondary.component';
import Paginator from '../../components/paginator/paginator.component';

import Image from 'next/image';

import { pages } from './pagesData';

import styles from './detail.module.scss';
import { GetStaticProps } from 'next';

const Detail: NextPageWithLayout = ({
  pageDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <div className={styles.detail}>
      <div className={styles.hero}>
        <Image
          src={pageDetails.hero}
          alt='hero'
          layout='responsive'
          width={1482}
          height={667}
        />
      </div>
      <main>
        <div className={styles.description}>
          <h2>{pageDetails.title}</h2>
          <p>{pageDetails.shortDesc}</p>
          <h4>{pageDetails.keywords}</h4>
          <h4>{pageDetails.technologies}</h4>
          <ButtonSecondary>Visit Website</ButtonSecondary>
        </div>
        <div className={styles.preview}>
          <h3>Project Background</h3>
          <p>{pageDetails.longDesc}</p>
          <h3>Static Previews</h3>
          <div className={styles.firstImage}>
            <Image
              src={pageDetails.preview1}
              width={847}
              height={534}
              layout='responsive'
              alt='preview 1'
            />
          </div>

          <Image
            src={pageDetails.preview2}
            width={847}
            height={534}
            layout='responsive'
            alt='preview 2'
          />
        </div>
      </main>
      <Paginator pageNo={Number(router.query.id)} />
    </div>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = pages.map((page) => ({
    params: { id: page.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDetails = pages[Number(context?.params?.id) - 1];
  return { props: { pageDetails } };
};

export default Detail;
