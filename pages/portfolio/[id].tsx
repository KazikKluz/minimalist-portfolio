import type { ReactElement } from 'react';
import { InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import type { NextPageWithLayout } from '../_app';

import Layout from '../../components/layout/layout.component';
import ButtonSecondary from '../../components/button-secondary/button-secondary.component';
import Paginator from '../../components/paginator/paginator.component';

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
        <picture className={styles.image}>
          <source
            media='(max-width: 475px)'
            srcSet={`/mobile${pageDetails.hero}.jpg 1x, /mobile${pageDetails.hero}@2x.jpg 2x`}
          />
          <source
            media='(max-width: 867px)'
            srcSet={`/tablet${pageDetails.hero}.jpg 1x, /tablet${pageDetails.hero}@2x.jpg 2x`}
          />
          <source
            media='(min-width: 868px)'
            srcSet={`${pageDetails.hero}.jpg 1x, ${pageDetails.hero}@2x.jpg 2x`}
          />
          <img src={`${pageDetails.hero}.jpg`} alt='hero image' />
        </picture>
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
            <picture className={styles.image}>
              <source
                media='(max-width: 475px)'
                srcSet={`/mobile${pageDetails.preview1}.jpg 1x, /mobile${pageDetails.preview1}@2x.jpg 2x`}
              />
              <source
                media='(max-width: 867px)'
                srcSet={`/tablet${pageDetails.preview1}.jpg 1x, /tablet${pageDetails.preview1}@2x.jpg 2x`}
              />
              <source
                media='(min-width: 868px)'
                srcSet={`${pageDetails.preview1}.jpg 1x, ${pageDetails.preview1}@2x.jpg 2x`}
              />
              <img src={`${pageDetails.preview1}.jpg`} alt='hero image' />
            </picture>
          </div>
          <picture className={styles.image}>
            <source
              media='(max-width: 475px)'
              srcSet={`/mobile${pageDetails.preview2}.jpg 1x, /mobile${pageDetails.preview2}@2x.jpg 2x`}
            />
            <source
              media='(max-width: 867px)'
              srcSet={`/tablet${pageDetails.preview2}.jpg 1x, /tablet${pageDetails.preview2}@2x.jpg 2x`}
            />
            <source
              media='(min-width: 868px)'
              srcSet={`${pageDetails.preview2}.jpg 1x, ${pageDetails.preview2}@2x.jpg 2x`}
            />
            <img src={`${pageDetails.preview2}.jpg`} alt='hero image' />
          </picture>
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
