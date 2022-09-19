import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout/layout.component';
import Preview from '../components/preview/preview.component';

import styles from './portfolio.module.scss';

import { portfolioData } from './portfolioData';

const Portfolio: NextPageWithLayout = () => {
  return (
    <div className={styles.portfolio}>
      {portfolioData.map((item, idx) => (
        <Preview
          key={idx}
          idx={idx}
          rightImage={item.rightImage}
          imageUrl={item.imageUrl}
          title={item.title}
          buttonTitle={item.buttonTitle}
          description={item.description}
          w={item.w}
          h={item.h}
        />
      ))}
    </div>
  );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Portfolio;
