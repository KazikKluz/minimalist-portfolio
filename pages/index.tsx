import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout/layout.component';
import Hero from '../components/hero/hero.component';
import Preview from '../components/preview/preview.component';

import styles from './index.module.scss';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Preview
        imageUrl='/image-homepage-profile@2x.jpg'
        title='About Me'
        buttonTitle='Go to portfolio'
        description='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
        w={540}
        h={600}
      />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
