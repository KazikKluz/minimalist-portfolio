import { ReactElement, useState } from 'react';
import ButtonSecondary from '../components/button-secondary/button-secondary.component';

import styles from './contactme.module.scss';
import { NextPageWithLayout } from './_app';

import Layout from '../components/layout/layout.component';

const ContactMe: NextPageWithLayout = () => {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isMessageValid, setMessageValid] = useState(true);
  const [emailAlert, setEmailAlert] = useState('This field is required');
  const { name, email, message } = inputData;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setNameValid(true);
    setEmailValid(true);
    setMessageValid(true);
    setEmailAlert('This field is required');
    const element = event.target as HTMLInputElement;

    setInputData({ ...inputData, [element.name]: element.value });
  };

  const handleClick = () => {
    let valid = true;
    if (!name.length) {
      setNameValid(false);
      valid = false;
    }
    if (!email.includes('@') || email.length < 5) {
      setEmailValid(false);
      setEmailAlert('Please enter valid email address');
      valid = false;
    }

    if (!email.length) {
      setEmailValid(false);
      valid = false;
    }

    if (!message.length) {
      setMessageValid(false);
      valid = false;
    }

    if (valid) {
      //here should be included a code for posting the user data
      //after that simply reset inputData values
      setInputData({ name: '', email: '', message: '' });
    }
  };

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
        <form className={styles.form}>
          <div
            className={`${styles.form_group} ${
              !isNameValid ? styles.danger : ''
            }`}
          >
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Jane Appleseed'
              value={name}
              onChange={handleChange}
            />
            <span>This field is required</span>
          </div>
          <div
            className={`${styles.form_group} ${
              !isEmailValid ? styles.danger : ''
            }`}
          >
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email@example.com'
              value={email}
              onChange={handleChange}
            />
            <span>{emailAlert}</span>
          </div>
          <div
            className={`${styles.form_group} ${
              !isMessageValid ? styles.danger : ''
            }`}
          >
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              placeholder='How can I help?'
              value={message}
              name='message'
              onChange={handleChange}
            />
            <span>This field is required</span>
          </div>
          <ButtonSecondary onClick={handleClick} dark>
            Send Message
          </ButtonSecondary>
        </form>
      </div>
    </div>
  );
};

ContactMe.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactMe;
