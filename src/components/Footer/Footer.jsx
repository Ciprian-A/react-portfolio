import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentTime = new Date().getUTCFullYear();
  return (
    <div className={styles.footer}>
      <p>
        <span>&copy;</span> Designed by Ciprian Andrei{' '}
        <span>{currentTime}</span>
      </p>
    </div>
  );
};

export default Footer;
