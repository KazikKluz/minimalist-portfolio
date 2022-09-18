import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import Layout from '../components/layout/layout.component';
import Preview from '../components/preview/preview.component';

import styles from './portfolio.module.scss';

const Portfolio: NextPageWithLayout = () => {
  return (
    <div className={styles.portfolio}>
      <Preview
        imageUrl='/image-portfolio-manage@2x.jpg'
        title='Manage'
        buttonTitle='view project'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.'
        w={540}
        h={500}
      />
      <Preview
        rightImage
        imageUrl='/image-portfolio-bookmark@2x.jpg'
        title='Bookmark'
        buttonTitle='view project'
        description='This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.'
        w={540}
        h={500}
      />
      <Preview
        imageUrl='/image-portfolio-insure@2x.jpg'
        title='Insure'
        buttonTitle='view project'
        description='This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.'
        w={540}
        h={500}
      />
      <Preview
        rightImage
        imageUrl='/image-portfolio-fylo@2x.jpg'
        title='Fylo'
        buttonTitle='view project'
        description='This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.'
        w={540}
        h={500}
      />
    </div>
  );
};

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Portfolio;
