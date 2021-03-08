import React from 'react'
import styles from './Home.module.scss';
import WelcomeMessage from '../WelcomeMessage';
import Parallax from 'react-rellax';

const Home = () => {

  return (
    <section id='home' className={styles.home}>
      <div className={styles.welcome}>
        <Parallax
          speed={7}
          zIndex={-1}
          percentage={0.55}
        >
          <WelcomeMessage />
        </Parallax>
      </div>
      
      <div className={styles.programmerContainer}>
      </div>
    </section>
  )
}

export default Home;
