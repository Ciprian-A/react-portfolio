import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentTime = new Date().getUTCFullYear();
  return (
    <div className={styles.footer}>
      <p>&copy;Designed by Ciprian Andrei using React.Js {currentTime}</p>
    </div>
  )
}

export default Footer
