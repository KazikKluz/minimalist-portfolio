import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout/layout.component';
import Hero from '../components/hero/hero.component';

import styles from './index.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
