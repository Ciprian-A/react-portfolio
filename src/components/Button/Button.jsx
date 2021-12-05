import React from 'react';
import styles from './Button.module.scss';

const Button = ({ name, link }) => {
  return (
    <div>
      <button className={styles.button}>
        <a href={link} target='_blank' rel='noreferrer' noopener>
          {name}
        </a>
      </button>
    </div>
  );
};

export default Button;
