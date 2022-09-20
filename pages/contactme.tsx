import { NextPage } from 'next';
import { ReactElement } from 'react';
import ButtonSecondary from '../components/button-secondary/button-secondary.component';

import styles from './contactme.module.scss';
import { NextPageWithLayout } from './_app';

import Layout from '../components/layout/layout.component';

const ContactMe: NextPageWithLayout = () => {
  return (
    <div className={styles.contactme}>
      <div className={styles.top}>
        <h3>Get In Touch</h3>
        <div className={styles.text}>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className={styles.social}>
            <a href='#'>
              <svg className={styles.icon}>
                <use xlinkHref='sprite.svg#github'></use>
              </svg>
            </a>
            <a href='#'>
              <svg className={styles.icon}>
                <use xlinkHref='sprite.svg#twitter'></use>
              </svg>
            </a>
            <a href='#'>
              <svg className={styles.icon}>
                <use xlinkHref='sprite.svg#linkedin'></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h3>Contact Me</h3>
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Jane Appleseed' />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='email@example.com' />
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='How can I help?' />
          <ButtonSecondary>Send Message</ButtonSecondary>
        </form>
      </div>
    </div>
  );
};

ContactMe.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactMe;
