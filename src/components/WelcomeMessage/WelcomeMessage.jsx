import React from 'react'
import styles from './WelcomeMessage.module.scss';
import Typewriter from 'typewriter-effect';


const WelcomeMessage = () => {

  
  return (
    <article>
      <section className={styles.heading}>
        <section className={styles.main}>
          <div>Hi, I am  
          <strong> Ciprian,</strong>
          <br/>
          a London based 
          </div>
        </section>
        <section className={styles.typewriter}>
          <Typewriter
            options={{
              strings: ['Software Developer', 'Javascript Developer', 'React Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </section>
      </section>
      
    </article>
  )
}

export default WelcomeMessage
